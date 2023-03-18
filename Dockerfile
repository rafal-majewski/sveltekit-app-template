FROM node:19.8.1-alpine3.17 AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./


RUN npm ci

COPY . .

RUN npm run build

FROM node:19.8.1-alpine3.17

RUN adduser --disabled-password --gecos '' appuser

WORKDIR /home/appuser

COPY --chown=appuser:appuser package.json ./
COPY --chown=appuser:appuser package-lock.json ./
COPY --chown=appuser:appuser --from=builder /app/build ./build

RUN chown -R appuser:appuser /home/appuser && npm ci --production

USER appuser

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
