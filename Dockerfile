# Builder image
FROM node:21-bookworm-slim as builder

WORKDIR /app

RUN apt-get update && apt-get install git -y
#RUN git clone https://github.com/Artur-Sg/INFLOT .
COPY . .
RUN npm install && npm run build
RUN cp -r ./public ./.next/standalone
RUN cp -r ./.next/static ./.next/standalone/.next


# Production image
FROM node:21-bookworm-slim

WORKDIR /site

COPY --from=builder /app/.next/standalone .

ENTRYPOINT [ "node", "server.js" ]