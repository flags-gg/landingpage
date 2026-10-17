FROM oven/bun:1.4.2-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN bun install --frozen-lockfile

FROM oven/bun:1.4.2-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
# optional overrides of the links in app/appconfig.tsx (e.g. local compose)
ARG VITE_DASHBOARD_URL VITE_DOCS_URL
# prerendering needs node: under bun, react-dom/server lacks renderToPipeableStream
RUN apk add --no-cache nodejs
RUN bun run build

FROM caddy:2-alpine
COPY --from=build-env /app/build/client /srv
COPY ./Caddyfile /etc/caddy/Caddyfile
