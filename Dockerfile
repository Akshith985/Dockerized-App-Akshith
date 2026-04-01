# Use a lightweight version of Node
FROM node:20-alpine

# Security Best Practice: Create a system group and user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Install dependencies first (for better layer caching)
COPY package*.json ./
RUN npm install --production

# Copy the source code
COPY . .

# Change ownership to the non-root user
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000

CMD ["node", "index.js"]