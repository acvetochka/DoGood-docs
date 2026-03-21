# POST /tasks

## Призначення
Створення нового завдання.

## Авторизація
Потрібен access token.

## Request body

```json
{
  "title": "Finish documentation",
  "description": "Prepare backend docs",
  "organizationId": "org_1"
}
```

## Поля

| Поле           | Тип    | Обов'язкове | Опис        |
| -------------- | ------ | :---------: | ----------- |
| title          | string |     так     | Назва       |
| description    | string |     ні      | Опис        |
| organizationId | string |     ні      | Організація |

## Що робить бекенд
1. Валідовує body
2. Створює запис у Task
3. Прив’язує завдання до користувача
4. За потреби прив’язує до організації
5. Повертає створений task DTO

## Що пишеться в БД

Task

## Response
```json
{
  "status": 201,
  "data": {
    "id": "task_1",
    "title": "Finish documentation",
    "description": "Prepare backend docs",
    "status": "OPEN",
    "ownerId": "usr_123",
    "organizationId": "org_1"
  }
}
```

## Пов’язані сутності

[Task](/entities/task)

User

Organization