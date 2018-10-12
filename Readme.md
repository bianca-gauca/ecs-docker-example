1. Build docker image
docker build -t [tag_name] .
docker build -t ecr-demo .

2. Push docker image to AWS ECR

3. Run
docker run -p 127.0.0.1:3030:3000 ecr-demo

4. DEPLOY TO AWS
    1. CREATE ECR
    2. RUN PUSH commands from ECR
    3. CREATE ECS Cluster
    4. CREATE ECS Task Definition
    5. CREATE ECS Service

USeful:
docker container ps
docker images
docker stop [container_name

-remove docker images
docker system prune -a]