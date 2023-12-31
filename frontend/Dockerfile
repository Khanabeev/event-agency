# Base stage
FROM node:20.10.0-alpine AS base 
WORKDIR /var/www/html
COPY ./frontend/package.*.json ./frontend/vite.config.ts ./
COPY ./frontend .
RUN npm install

# Development stage
FROM base AS dev
EXPOSE 80
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS build 
RUN npm run build

# Production stage
FROM nginx:1.25.1-alpine AS prod
COPY --from=build /var/www/html/dist /usr/share/nginx/html
COPY ./deployment/config/nginx/nginx-frontend.conf /etc/nginx/nginx.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]