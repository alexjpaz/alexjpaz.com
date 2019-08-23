#!/bin/bash

STAGE=$1
STAGE=${STAGE//\//-}

echo "STAGE=${STAGE}"

export expiresAt=${2:-"null"}

sls() {
    node_modules/.bin/serverless $@
}

sls_rollback() {
    local timestamp=$1
    echo "=== Rolling back ${STAGE} to ${timestamp}  ==="
    sls rollback --timestamp=${timestamp}
    exit 1
}

echo "=== Deploying to ${STAGE} stage ==="

sls deploy list --stage ${STAGE} -v &> deploy-list.out
PREVIOUS_VERSION=$(cat deploy-list.out | grep 'Timestamp' | awk '{ print $3 }' | sort -nr)
sls deploy --stage ${STAGE} -v | tee deploy.out

export BASE_URL=$(cat deploy.out | grep 'ServiceEndpoint' | awk '{ print $2 }')

if [[ -z "$BASE_URL" ]]; then
    echo "=== Count not find ServiceEndpoint. Perhaps the stack failed to deploy? ==="
    sls_rollback $PREVIOUS_VERSION
fi

echo "BASE_URL=$BASE_URL"

npm run test:integration -- --retries 5 --forbid-only

if [[ "$?" -ne 0 ]]; then
    sls_rollback $PREVIOUS_VERSION
fi
