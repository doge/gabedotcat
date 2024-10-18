FROM node:alpine AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY yarn.lock .

# RUN npm install
RUN yarn install --production

# Copy project files and build
COPY . ./
RUN yarn build

FROM nginx:1.23.1-alpine
EXPOSE 3000
COPY /deployments/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]