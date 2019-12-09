
FROM node:13.3.0 AS nodeNpm
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
FROM node:alpine
ENV PORT=3000
RUN mkdir -p /app
WORKDIR /app
COPY --from=nodeNpm /app .
EXPOSE $PORT
ENTRYPOINT npm run start