# Specify base NodeJs 12 image
FROM node:12

WORKDIR '/app'

# Install some dependencies
COPY package.json .
RUN npm install
COPY . .

# Default command
CMD [ "node", "app.js" ]