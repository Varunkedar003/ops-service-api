# ---------- Build Stage ----------
FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build


# ---------- Production Stage ----------
FROM node:24-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev 

# Copy compiled application
COPY --from=builder /app/dist ./dist

# Copy environment file
#COPY .env ./

# Application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/src/index.js"]
