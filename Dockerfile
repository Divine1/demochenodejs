FROM node:12.22-alpine3.14
RUN mkdir -p /app
COPY . /app
CMD ["node","/app/server.js"]