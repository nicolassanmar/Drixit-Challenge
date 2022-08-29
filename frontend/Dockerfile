FROM node:16-alpine3.15

WORKDIR /app

# copy all the files
COPY . .

RUN npm ci

EXPOSE 4173
# entry point is npm start
CMD ["npm", "start"]
