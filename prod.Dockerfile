FROM node:14-alpine as builder

ARG AF_K8S_NS

ARG APP_BASE

ARG ROLLBAR_SERVER_TOKEN

ENV ROLLBAR_VERSION=0.0.1

ENV REACT_APP_AF_CORE_VERSION=$ROLLBAR_VERSION

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

#RUN yarn install --network-timeout 100000

RUN apk add --update git curl bash

RUN npm config set @hipdevteam:registry https://gitlab.com/api/v4/projects/33240133/packages/npm/

# Authentication is required, even though it is a public repository/registry
# I found the auth token committed to the afsecretshopfrontend repo, so I'm
# assuming that it is read-only
RUN npm config set -- '//gitlab.com/api/v4/projects/33240133/packages/npm/:_authToken=iy_xGPsbiuPNsj94W78y'

RUN npm install

COPY . /app

#RUN yarn build

RUN npm run build

RUN ls /app

RUN ls

RUN ./bash-scripts/utility/rollbar-source-maps-upload.sh

#### final image #####
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx-core.conf /etc/nginx/nginx.conf
COPY default-core.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]