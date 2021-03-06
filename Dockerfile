FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY tsconfig.json /usr/src/app
COPY src /usr/src/app/src
COPY public /usr/src/app/public

RUN npm install

RUN npm run build
RUN npm install -g serve
RUN npm prune --production

EXPOSE 8080
CMD [ "serve", "--listen" , "tcp://0.0.0.0:8080", "-s", "build" ]