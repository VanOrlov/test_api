# Dockerfile
# Use the official Node.js image from Docker Hub
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Start the application
CMD ["node", "api/index.js"]
