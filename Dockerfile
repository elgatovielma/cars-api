# Specify base NodeJs 12 image
FROM node:12

WORKDIR '/usr/src/app'

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

EXPOSE 3000

# Default command
CMD [ "node", "app.js" ]