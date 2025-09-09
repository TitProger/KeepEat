# KepEat Backend

Backend API для приложения KepEat, построенный на NestJS с MikroORM и PostgreSQL.

## 🚀 Быстрый старт

### 1. Запуск базы данных
```bash
# Запустить PostgreSQL контейнер
docker compose up -d
```

### 2. Установка зависимостей
```bash
npm install --ignore-scripts
```

### 3. Запуск приложения
```bash
# Способ 1: Через PowerShell скрипт (рекомендуется)
.\start-dev.ps1

# Способ 2: Вручную с переменными окружения
$env:PG_HOST='localhost'; $env:PG_PORT='5432'; $env:PG_DATABASE='keepeat'; $env:PG_USERNAME='postgres'; $env:PG_PASSWORD='postgres'; $env:PG_MIGRATIONS_RUN='true'; $env:PG_LOGGINING='true'; npm run start:dev
```

## 🗄️ Миграции

### Управление миграциями
```bash
# Через PowerShell скрипт (рекомендуется)
.\run-migrations.ps1 list          # Список миграций
.\run-migrations.ps1 create имя    # Создать миграцию
.\run-migrations.ps1 up            # Применить миграции
.\run-migrations.ps1 down          # Откатить миграции

# Через npm команды
npm run migration:list             # Список миграций
npm run migration:create -- имя    # Создать миграцию
npm run migration:up               # Применить миграции
npm run migration:down             # Откатить миграции
```

## ⚙️ Конфигурация

### Переменные окружения
- `PG_HOST` - хост PostgreSQL (по умолчанию: localhost)
- `PG_PORT` - порт PostgreSQL (по умолчанию: 5432)
- `PG_DATABASE` - имя базы данных (по умолчанию: keepeat)
- `PG_USERNAME` - пользователь PostgreSQL (по умолчанию: postgres)
- `PG_PASSWORD` - пароль PostgreSQL (по умолчанию: postgres)
- `PG_MIGRATIONS_RUN` - запускать ли миграции автоматически (по умолчанию: true)
- `PG_LOGGINING` - включить логирование SQL (по умолчанию: true)

### Структура проекта
```
src/
├── common/
│   └── config/
│       ├── envs/           # Конфигурация переменных окружения
│       └── mikro-orm/      # Конфигурация MikroORM
├── modules/                 # Модули приложения
├── migrations/             # Миграции базы данных
└── main.ts                 # Точка входа
```

## 🔧 Доступные команды

- `npm run build` - сборка проекта
- `npm run start` - запуск в продакшн режиме
- `npm run start:dev` - запуск в режиме разработки
- `npm run start:debug` - запуск в режиме отладки
- `npm run lint` - проверка кода

## 🌐 API Endpoints

- `POST /auth/register` - регистрация пользователя

## 📝 Примечания

- Убедитесь, что PostgreSQL контейнер запущен перед запуском приложения
- Для создания миграций используйте скрипт `run-migrations.ps1`
- Все изменения в коде автоматически сохраняются при использовании `start:dev`

