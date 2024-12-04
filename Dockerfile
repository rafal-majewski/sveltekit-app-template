ARG ALPINE_VERSION
ARG NODE_JS_VERSION
FROM node:${NODE_JS_VERSION}-alpine${ALPINE_VERSION} AS builder
WORKDIR /home/builder/sveltekit-app-template
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM node:${NODE_JS_VERSION}-alpine${ALPINE_VERSION} AS runner
RUN adduser --disabled-password --gecos '' runner
WORKDIR /home/runner/sveltekit-app-template
COPY --from=builder --chown=runner:runner /home/builder/sveltekit-app-template/build /home/runner/sveltekit-app-template/build
RUN chown -R runner:runner /home/runner
USER runner
EXPOSE 3000
ENTRYPOINT ["node", "./build/index.js"]
