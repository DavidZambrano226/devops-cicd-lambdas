# AWS Lambda project with CI/CD strategy

This is a backend project that integrate the CI/CD Strategy to automate the build and deploy phases from service with AWS Lambda.

### Stack

- NodeJS 20
- AWS Lambda Runtime Node20.X
- Jest

### Gettin Started

1. Clone the repository
2. Navegate from terminato into the root folder of repository `cd devops-cicd-lambdas`
3. Run the install dependencies command `npm install`

### How to deploy?

The deplouy is automated by AWS Codebuild, this project integrate a `buildspec` files with the definition to run the AWS Codebuild validations and deploy.

You are ready to use this project.

Developed by: David
