FROM node:latest

WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src

RUN npm install

CMD [ "npm", "run", "start:prod" ]
