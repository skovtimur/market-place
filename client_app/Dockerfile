# Use the latest LTS version of Node.js
FROM node:alpine as build
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
COPY . .
 
# Expose the port your app runs on
EXPOSE 3000
 
# Define the command to run your app
CMD ["npm", "start"]