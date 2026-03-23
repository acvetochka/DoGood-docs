# Task

## Опис
Сутність завдання.

## Таблиця / модель
`Task`

## Поля

| Поле           | Тип                                                   | Обов'язкове | Опис                                                      | Примітка                 |  Зберігається в базі  |
| -------------- | ----------------------------------------------------- | :---------: | --------------------------------------------------------- | ------------------------ | :-------------------: |
| id             | string                                                |      ✅      | Унікальний ID                                             | генерується в БД         |           ✅           |
| title          | string                                                |      ✅      | Назва                                                     |                          |           ✅           |
| isOrganization | boolean                                               |      ✅      |                                                           |                          |           ❌           |
| organizationId | string                                                |     ❌ ✅     | id організації <br> обов'язкове при isOrganization=`true` |                          |           ❌           |
| description    | string                                                |      ❌      | Опис                                                      |                          |           ✅           |
| picture        | string                                                |      ❌      | url зображення                                            |                          |           ✅           |
| startDate      | string, DateTime                                      |      ✅      |                                                           |                          |           ✅           |
| startTime      | string, DateTime                                      |      ✅      |                                                           |                          |           ✅           |
| endDate        | string, DateTime                                      |      ❌      |                                                           |                          |           ✅           |
| location       | obj {"lat": number, <br> "lng": number}               |      ❌      |                                                           |                          |  ✅  <br> (geography)  |
| locationName   | string                                                |      ❌      |                                                           |                          |           ✅           |
| locationId     | number                                                |      ❌      |                                                           | генерується в БД         |           ✅           |
| amount         | number                                                |      ❌      |                                                           |                          |           ✅           |
| currentAmount  | number                                                |      ❌      |                                                           |                          |           ✅           |
| currency       | string                                                |      ❌      |                                                           |                          |           ✅           |
| requirements   | string                                                |      ❌      |                                                           |                          |           ✅           |
| categories     | CategoryType[]                                        |      ✅      |                                                           |                          |           ✅           |
| hostId         | number                                                |      ✅      |                                                           | генерується в БД         |           ✅           |
| host           | obj, {"user": User, <br> "organization": Orgnization} |      ✅      |                                                           | генерується в БД         | ✅ <br> (таблиця Host) |
| joinedUsers    | User[]                                                |      ❌      |                                                           |                          |                       |
| status         | TaskStatus**                                          |      ✅      | Статус                                                    | за замовченням "PENDING" |           ✅           |
| createdAt      | string                                                |      ✅      | Дата створення                                            | генерується в БД         |           ✅           |
| updatedAt      | string                                                |      ✅      | Дата оновлення                                            | генерується в БД         |           ✅           |



 `* поля без примітки передаються з фронта`

```jsonc
// for users 

  "host": {
    "user": {
        "id": "4e53467c-5377-420c-a7f8-5710fefa9896",
        "name": "User Example",
        "createdAt": "2026-03-16T20:45:46.422",
        "updatedAt": "2026-03-16T20:50:05.121"
    },
    "organization": null
  },

  // for organization

   "host": {
      "user": null,
      "organization": {
          "id": "314444ad-f624-40cd-b9db-63395219d5e2",
          "name": "Amazon",
          "createdAt": "2026-03-16T22:17:33.263"
      }
  },
```

## Схема в SQL

<!-- ![TASK](/diagrams/task.mmd) -->

![TaskMermaid](/public/diagrams/task.svg)

<!-- ```mermaid
erDiagram
  "Task" {
    String id "🗝️"
    String title 
    String description 
    String picture "❓"
    TaskStatus status 
    Int hostId
    DateTime startDate 
    DateTime startTime 
    DateTime endDate "❓"
    Int locationId "❓"
    geography location "❓"
    String locationName "❓"
    CategoryType categories 
    Int amount "❓"
    Int current_amount "❓"
    String currency "❓"
    String requirements "❓"
    DateTime createdAt 
    DateTime updatedAt 
    }
``` -->
<!-- 
 id            | text                           |           | not null | gen_random_uuid()::text
 title         | text                           |           | not null |
 description   | text                           |           | not null |
 picture       | text                           |           |          |
 status        | "TaskStatus"                   |           | not null | 'PENDING'::"TaskStatus"
 hostId        | integer                        |           | not null |
 startDate     | timestamp(3) without time zone |           | not null |
 startTime     | timestamp(3) without time zone |           | not null |
 endDate       | timestamp(3) without time zone |           |          |
 locationId    | integer                        |           |          |
 categories    | "CategoryType"[]               |           |          |
 createdAt     | timestamp(3) without time zone |           | not null | CURRENT_TIMESTAMP
 updatedAt     | timestamp(3) without time zone |           | not null |
 location      | geography                      |           |          |
 amount        | integer                        |           |          |
 currency      | text                           |           |          |
 requirements  | text                           |           |          |
 currentAmount | integer                        |           |          |
 locationName  | text                           |           |          |
 -->
