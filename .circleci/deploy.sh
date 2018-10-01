#!/bin/bash

STAGE=$1

sls() {
    node_modules/.bin/serverless $@
}

sls_rollback() {
    local timestamp=$1
    sls rollback --timestamp=${timestamp}
}

sls deploy list --stage ${STAGE} -v | tee deploy-list.out
PREVIOUS_VERSION=$(cat deploy-list.out | grep 'Timestamp' | awk '{ print $3 }' | sort -nr)
sls deploy --stage ${STAGE} -v | tee deploy.out || sls rollback --timestamp=${PREVIOUS_VERSION}
