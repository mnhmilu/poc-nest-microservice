# Use the official Node.js image as the base
FROM node:21-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY ../../package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the application will listen
EXPOSE 3001

# Define the command to run when the container starts
CMD ["npm", "run", "start:dev"]