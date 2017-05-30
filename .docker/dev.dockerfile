#https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# Install node
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install

# Bundle app sources
COPY . /usr/src/app

# Set port
EXPOSE 3000

# Run node
CMD ["npm", "start"]