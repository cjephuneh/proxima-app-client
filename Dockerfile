# ---- Base Node ----
FROM node:latest AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install --legacy-peer-deps

# ---- Build ----
FROM dependencies AS build
RUN npm install -g next

COPY . .
RUN npm run build

# ---- Production ----
FROM node:latest AS production
WORKDIR /app

# Copy production build files from the builder phase
COPY --from=build /app/.next ./.next
COPY --from=build /app/__test_utils__ ./__test_utils__
COPY --from=build /app/components ./components
COPY --from=build /app/__test__ ./__test__
COPY --from=build /app/assets ./assets
COPY --from=build /app/pages ./pages
COPY --from=build /app/public ./public
COPY --from=build /app/redux ./redux
COPY --from=build /app/scripts ./scripts
COPY --from=build /app/styles ./styles
COPY --from=build /app/utils ./utils
COPY --from=build /app/.dockerignore ./.dockerignore
COPY --from=build /app/.eslintrc.json ./.eslintrc.json
COPY --from=build /app/.gitignore ./.gitignore
COPY --from=build /app/.env.local ./.env.local
COPY --from=build /app/docker-compose.yml ./docker-compose.yml
COPY --from=build /app/Dockerfile ./Dockerfile
COPY --from=build /app/jest.config.js ./jest.config.js
COPY --from=build /app/next.config.js ./next.config.js
COPY --from=build /app/package-lock.json ./package-lock.json
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/postcss.config.js ./postcss.config.js
COPY --from=build /app/README.md ./README.md
COPY --from=build /app/tailwind.config.js ./tailwind.config.js
COPY --from=build /app/test_middleware.js ./test_middleware.js

# Install production dependencies
RUN npm install --production

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]

