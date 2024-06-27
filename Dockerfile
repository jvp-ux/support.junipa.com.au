FROM node:20-bullseye

WORKDIR /app

RUN npm install -g npm@latest

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]