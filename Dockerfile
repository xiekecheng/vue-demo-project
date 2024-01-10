FROM node:18-buster as build-stage
WORKDIR /app
COPY package*.json ./
# 设置 npm registry
RUN npm config set registry https://registry.npm.taobao.org/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]