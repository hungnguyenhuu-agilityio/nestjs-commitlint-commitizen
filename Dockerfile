# Use an official Node.js runtime as a parent image
FROM node:20.18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN pnpm run build

# Expose the port on which your app will run
EXPOSE 3000

# Define the command to run your application
CMD ["pnpm", "run", "start:dev"]
