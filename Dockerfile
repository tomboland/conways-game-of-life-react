FROM node:7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY src /usr/src/app/src

RUN npm run build

RUN npm prune --production

ENV HOST "0.0.0.0"
ENV PORT "8080"
EXPOSE 8080
CMD [ "npm", "run", "start" ]