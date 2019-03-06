FROM node:11

ADD . /src
WORKDIR /src
RUN npm i

EXPOSE 10000/udp

CMD npm start