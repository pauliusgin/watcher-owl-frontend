
FROM node:20-alpine3.19 as build 
WORKDIR /app/frontend
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine3.19 as production
WORKDIR /app/frontend
RUN npm install serve
COPY --from=build /app/frontend/dist ./dist 
CMD ["npx", "serve", "-p", "1337", "dist"]