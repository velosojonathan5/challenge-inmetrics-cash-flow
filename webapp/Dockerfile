
FROM node:latest
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli@15.0.1 && npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]