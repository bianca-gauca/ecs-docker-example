## Useful Docker commands

1. Build docker image

docker build -t [tag_name] .
docker build -t ecr-demo .

2. Run

docker run -p 127.0.0.1:3030:3000 ecr-demo

3. List containers or images

docker container ps
docker images

4. Stop container

docker stop [container_name]

## Amazon Free Tier (https://aws.amazon.com/free/)

## DEPLOY TO AWS
    1. CREATE ECR
    2. RUN PUSH commands from ECR
    3. CREATE ECS Cluster
    4. CREATE ECS Task Definition (taskDefNodeApp.json example)
    5. CREATE ECS Service
