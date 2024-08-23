# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including devDependencies for build
RUN npm ci --verbose

# Copy application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Remove development dependencies to keep the image lean
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 8000

# Command to run the app
CMD ["npm", "start"]
