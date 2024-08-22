# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (only production dependencies if applicable)
RUN npm ci --only=production

# Copy application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Remove TypeScript source files and unnecessary dependencies (optional)
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 8000

# Command to run the app
CMD ["npm", "start"]
