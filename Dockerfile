from node:9.11.1-alpine

RUN npm install -g http-server

WORKDIR /configuration-web-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["http-server", "dist"]