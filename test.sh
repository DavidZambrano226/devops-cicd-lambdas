#!/bin/bash
template_file="api-docs.json"
echo $template_file

# sed -i "s/{{region}}/HELLO/g" "api-docs.json"
# sed -i '' 's/{{region}}/HELLO/g' \
#     -i '' 's/{{account_id}}/ACCOUNT/g' \
#     "$template_file"
sed -i '' -e 's/{{region}}/HELLO/g' -e 's/{{account_id}}/ACCOUNT/g' "$template_file"

