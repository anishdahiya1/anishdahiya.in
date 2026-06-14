FROM node:20-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 7860

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "7860"]