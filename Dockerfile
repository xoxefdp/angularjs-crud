# Create image based on the official Node 8 image from dockerhub
FROM node:8-alpine

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# 
RUN npm i -g bower yarn http-server --loglevel verbose

# Get all the code needed to run the app
COPY . /usr/src/app

# Install dependecies
RUN npm install --loglevel verbose

# Expose the port the app runs in
EXPOSE 8000

# 
ENTRYPOINT [ "npm", "run" ]

# Serve the app
CMD [ "start", "--host=0.0.0.0" ]