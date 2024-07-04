FROM node:18
#Create a working directory
WORKDIR /app
#Install app-dependencies
COPY package.*json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "dev"]