
FROM node:13.3.0 AS nodeNpm
COPY package.json package-lock.json ./
RUN npm install
FROM node:alpine
RUN mkdir /app
WORKDIR /app
ENV PORT=3000
ENV THEME=damal
COPY --from=nodeNpm node_modules node_modules 
COPY . .
EXPOSE $PORT
CMD npm start