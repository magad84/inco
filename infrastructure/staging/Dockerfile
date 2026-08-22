FROM node:22-alpine AS build
WORKDIR /app
COPY packages/domain-core/package.json packages/domain-core/package.json
RUN cd packages/domain-core && npm install --no-audit --no-fund
COPY packages/domain-core packages/domain-core
COPY packages/uat-ui packages/uat-ui
COPY scripts scripts
COPY knowledge knowledge
WORKDIR /app/packages/domain-core
RUN npm run build:public

FROM nginx:1.29-alpine

COPY infrastructure/staging/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist-public /usr/share/nginx/html

USER nginx
EXPOSE 8080
HEALTHCHECK --interval=15s --timeout=5s --retries=5 \
  CMD wget -qO- http://127.0.0.1:8080/inco/ >/dev/null || exit 1
