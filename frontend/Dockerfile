# # local
# FROM node:alpine

# WORKDIR /app

# COPY package.json ./

# RUN npm install
# COPY ./ ./


# CMD ["npm", "start"]


# # production
# # FROM node:14-alpine as build-stage

# # WORKDIR /app

# # # Install dependencies
# # COPY package*.json ./
# # RUN npm install

# # # Build
# # COPY . .
# # RUN npm run build

# # # -----------------------------------------------------------------------------
# # # SERVING IMAGE
# # FROM fitiavana07/nginx-react

# # # Copy built files
# # COPY --from=build-stage /app/build /usr/share/nginx/html

# # # 3000 for HTTP
# # EXPOSE 3000

# # # Run nginx
# # CMD nginx -g 'daemon off;'

# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]