FROM node:22-alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
