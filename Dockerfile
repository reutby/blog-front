FROM node:13.3.0-alpine
RUN apk add --no-cache make gcc g++ python
WORKDIR /app
ENV THEME=damal
ENV PORT=3000
EXPOSE $PORT
COPY . .
RUN export NODE_ENV=development && npm install
CMD export NODE_ENV=production && npm run build && npm start
