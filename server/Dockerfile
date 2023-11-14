FROM node:fermium as base

WORKDIR /app
COPY package.json yarn.lock ./
RUN mkdir -p ./server
COPY ./server/package.json ./server
RUN yarn install
RUN npm install -g typescript
RUN npm install -g ts-node
COPY . .

WORKDIR /app/server

EXPOSE 5000

ENTRYPOINT [ "ts-node", "src/index.ts"]
