# syntax=docker/dockerfile:1



FROM node:lts-alpine
# Install Nginx
RUN apk add --no-cache nginx
WORKDIR /bookcars/api
COPY ./ ./
COPY ./packages ./packages
RUN mkdir -p /var/www/cdn/bookcars/users
RUN mkdir -p /var/www/cdn/bookcars/temp/users
RUN mkdir -p /var/www/cdn/bookcars/cars
RUN mkdir -p /var/www/cdn/bookcars/temp/cars
RUN npm install --omit=dev

COPY nginx.conf /etc/nginx/nginx.conf
CMD nginx && npm start
EXPOSE 4002
