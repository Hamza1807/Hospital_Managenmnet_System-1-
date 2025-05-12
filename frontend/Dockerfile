# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the production build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the app using the build directory
CMD ["serve", "-s", "build", "-l", "3000"]
