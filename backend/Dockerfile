FROM node:18.13.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g @nestjs/cli && npm install

EXPOSE 3000

CMD ["npm", "run","start"]