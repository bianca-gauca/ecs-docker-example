# specify the node base image with your desired version node:<version>
FROM node:8

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# install node packages
RUN npm install

# replace this with your application's default port
EXPOSE 3000

# start server
CMD ["node", "server.js"]