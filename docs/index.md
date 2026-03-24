---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DoGood documentation"
  text: "Frontend ↔ Backend documentation"
  actions:
    - theme: brand
      text: Figma Design
      link: https://www.figma.com/design/0RMhHs8vnQiQvctOk673GW/DoGood-Design
    - theme: alt
      text: Frontend Docs
      link: /frontend/components

features:
  - title: Архітектура
    details: загальна логіка системи
    link: /architecture/overview
  - title: Cутності 
    details: моделі та сутності
    link: /entities/task
  - title: Ендпоінти
    details: конкретні API-контракти
    link: /endpoints/tasks/create-task
  - title: API Swagger
    details: документація Swagger 
    link: /api-reference/swagger-ui
---

---

# Project Documentation

Ця документація описує:

- взаємодію фронтенда і бекенда
- request / response по ендпоінтах
- що читається та записується в базу
- які сутності існують у системі
- глобальні правила формату відповідей та помилок

## Основні розділи

- [Архітектура](/architecture/overview)
- [Сутності](/entities/task)
- [Ендпоінти](/endpoints/tasks/create-task)
<!-- - [Conventions](/conventions/response-format) -->
<!-- - [API Reference](/api-reference/openapi) -->

