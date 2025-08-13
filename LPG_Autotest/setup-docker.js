const fs = require("fs");

const files = {
  ".dockerignore": `node_modules
.git
allure-results
allure-report
dist
`,
  "Dockerfile": `FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx playwright install --with-deps
RUN npm install -g allure-commandline --silent

CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]
`,
  "docker-compose.yml": `version: "3.8"
services:
  tests:
    build: .
    volumes:
      - ./:/app
      - ./allure-results:/app/allure-results
      - ./allure-report:/app/allure-report
    environment:
      - CI=true
    command: /bin/bash -lc "npx playwright test --reporter=allure-playwright && allure generate allure-results --clean -o allure-report"
`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(filename, content);
  console.log(`✅ Создан файл: ${filename}`);
}
