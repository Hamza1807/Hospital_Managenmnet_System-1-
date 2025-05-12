# Step 1: Use an official Node.js runtime as a parent image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port the app runs on (5000 for backend)
EXPOSE 5000

# Step 7: Command to run the app (ensure you are using the correct entry point, typically index.js or server.js)
CMD ["node", "server.js"]
