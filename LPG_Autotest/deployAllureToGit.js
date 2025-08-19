import fs from 'fs-extra';
import { execSync } from 'child_process';
import path from 'path';

const SRC_DIR = path.resolve('./allure-report'); // папка с готовым отчётом
const TMP_DIR = path.resolve('./tmp-deploy');   // временная папка для деплоя

async function main() {
  try {
    // Очистка и создание временной папки
    await fs.remove(TMP_DIR);
    await fs.mkdirp(TMP_DIR);

    // Копирование всех файлов отчёта
    await fs.copy(SRC_DIR, TMP_DIR);
    console.log('Копирование завершено!');

    // Инициализация Git в временной папке
    execSync('git init', { cwd: TMP_DIR, stdio: 'inherit' });

    // Получаем URL оригинального репозитория
    const repoUrl = execSync('git remote get-url origin', { stdio: 'pipe' }).toString().trim();

    execSync(`git remote add origin ${repoUrl}`, { cwd: TMP_DIR, stdio: 'inherit' });

    // Создаём ветку для gh-pages (если её нет)
    execSync('git checkout -B gh-pages', { cwd: TMP_DIR, stdio: 'inherit' });

    // Добавляем файлы, коммитим и пушим
    execSync('git add .', { cwd: TMP_DIR, stdio: 'inherit' });
    execSync('git commit -m "Update Allure report"', { cwd: TMP_DIR, stdio: 'inherit' });
    execSync('git push -u origin gh-pages --force', { cwd: TMP_DIR, stdio: 'inherit' });

    console.log('Деплой завершён!');
  } catch (err) {
    console.error('Ошибка деплоя:', err);
  }
}

main();
