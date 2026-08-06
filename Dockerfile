FROM node:22.23.1-alpine3.22 AS build
WORKDIR /app
COPY packages/domain-core/package.json ./packages/domain-core/package.json
RUN cd packages/domain-core && npm install --no-audit --no-fund
COPY packages ./packages
COPY knowledge ./knowledge
RUN cd packages/domain-core && npm run build && npm prune --omit=dev

FROM node:22.23.1-alpine3.22 AS runtime
ENV NODE_ENV=production HOST=0.0.0.0 PORT=4173 AI_ENABLED=false
WORKDIR /app
RUN addgroup -S inco && adduser -S -G inco inco
COPY --from=build --chown=inco:inco /app/packages/domain-core/package.json ./packages/domain-core/package.json
COPY --from=build --chown=inco:inco /app/packages/domain-core/node_modules ./packages/domain-core/node_modules
COPY --from=build --chown=inco:inco /app/packages/domain-core/dist ./packages/domain-core/dist
COPY --from=build --chown=inco:inco /app/packages/uat-ui ./packages/uat-ui
COPY --from=build --chown=inco:inco /app/knowledge ./knowledge
USER inco
WORKDIR /app/packages/domain-core
EXPOSE 4173
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD wget -qO- http://127.0.0.1:4173/healthz >/dev/null || exit 1
CMD ["node","dist/src/uat-server.js"]
