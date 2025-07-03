# Movies Explorer API

Backend для приложения с управлением коллекцией фильмов и авторизацией пользователей.

## Функционал

- Регистрация и авторизация пользователей
- Сохранение и удаление фильмов
- Управление профилем пользователя

## Технологии

- Node.js + Express
- MongoDB + Mongoose
- JWT авторизация
- Валидация данных (Joi/Celebrate)
- Логирование (Winston)
- Защита от атак (Helmet, Rate Limiting)

## API Endpoints

### Авторизация
- `POST /signup` - регистрация
- `POST /signin` - вход
- `DELETE /signout` - выход

### Пользователи
- `GET /users/me` - данные пользователя
- `PATCH /users/me` - обновление профиля

### Фильмы
- `GET /movies` - получить сохранённые фильмы
- `POST /movies` - сохранить фильм
- `DELETE /movies/:movieId` - удалить фильм

## Запуск

```bash
npm install
npm start
```
