FROM node:latest as node
WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=node /app/build /usr/share/nginx/html