FROM node:14

EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm ci

CMD npm run dev