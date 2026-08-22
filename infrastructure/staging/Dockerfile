FROM nginx:1.29-alpine

COPY infrastructure/staging/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist-public /usr/share/nginx/html

USER nginx
EXPOSE 8080
HEALTHCHECK --interval=15s --timeout=5s --retries=5 \
  CMD wget -qO- http://127.0.0.1:8080/inco/ >/dev/null || exit 1
CMD ["nginx", "-g", "daemon off; pid /tmp/nginx.pid;"]
