# stage 1
FROM node:10-alpine as node

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY ./ /app/
RUN npm run build

# stage 2
FROM nginx:1.17-alpine
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/apps-frontend /usr/share/nginx/html
