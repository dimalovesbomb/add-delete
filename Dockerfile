FROM node:20.10.0-bullseye
WORKDIR /app

COPY package.json /app/package.json

RUN npm install
COPY . /app/.

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "serve-build"]
