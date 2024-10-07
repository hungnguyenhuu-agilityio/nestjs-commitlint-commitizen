#!/bin/bash

# Print a message indicating that the app is starting
echo "Starting NestJS application using Docker Compose..."

# Navigate to the project root directory
cd "$(dirname "$0")/.."

# Run Docker Compose
docker compose up --build

# Print a message indicating the app has started
echo "NestJS app is running at http://localhost:3000"
