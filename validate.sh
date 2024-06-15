#!/bin/bash
# verify status of cloudformation stack
status="$(aws cloudformation describe-stacks --stack-name cicd-lambda-stack --region us-east-1 --query "Stacks[0].StackStatus")"
echo $status
if [[ $status == *"ROLLBACK_COMPLETE"* ]]; then
    echo "Stack is in ROLLBACK_COMPLETE state. Deleting the stack.";
fi