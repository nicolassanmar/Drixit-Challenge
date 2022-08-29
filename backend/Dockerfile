FROM node:16-alpine3.15

WORKDIR /app

# copy all the files
COPY . .

RUN npm ci

RUN npm run build

ENV MONGODB_URI='mongodb://user:pass@mongodb:27017/drixit'

# entry point is npm start
CMD ["npm", "start"]
