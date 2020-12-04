FROM node:latest AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . /app/
ARG REACT_APP_API_ROOT=https://team-b-server-ns2svqdtya-ew.a.run.app/
RUN ng config -g cli.warnings.versionMismatch false
RUN ng build

FROM nginx:alpine

COPY --from=build /app/default.conf /etc/nginx/conf.d/configfile.template
#COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/SoftwareEngineering /var/www
#COPY build /var/www

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

RUN chown -R nginx:nginx /var/www && chmod -R 755 /var/www

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
