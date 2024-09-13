# Use the official Node.js image as the base
FROM node:21-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

COPY --from=configs ./package* /usr/src/app/

RUN mkdir -p libs/contracts/src

COPY --from=libs ./contracts/* /usr/src/app/libs/contracts/src/

# Install dependencies
RUN npm install && npm cache clean --force

COPY --from=configs ./tsconfig.json /usr/src/app/
COPY --from=configs ./tsconfig.app.json /usr/src/app/

# Copy the rest of the application code to the working directory
COPY . .

RUN  ls 

# Expose the port on which the application will listen
EXPOSE 3002

# Define the command to run when the container starts
CMD ["npm", "run", "start:dev"]