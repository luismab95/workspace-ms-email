FROM node:22.14.0-bullseye as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM node:22.14.0-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/templates ./dist/templates

EXPOSE 3000

CMD ["npm", "start"]