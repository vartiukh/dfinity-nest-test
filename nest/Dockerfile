FROM node:14-alpine

# set our working directory
WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . ./

ENV NODE_ENV=development

# Run the web service on container boot
CMD ["yarn", "run", "start:dev"]
