FROM mcr.microsoft.com/playwright:v1.54.2-jammy

WORKDIR /tests

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]

