#!/bin/bash

STAGE=$(echo $1 | sed 's@[_/]@@g')

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
BASE_URL=$(cat deploy.out | grep 'ServiceEndpoint' | awk '{ print $2 }') npm run test:integration --retries 5

if [[ "$?" -ne 0 ]]; then
    sls_rollback $PREVIOUS_VERSION
fi

if [[ "${STAGE}" =~ ^branch ]]; then
    echo "=== Sleeping for 5 minutes before tearing down the stack"
    sleep 300
    sls remove
fi
