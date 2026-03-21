---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DoGood documentation"
  text: "Frontend ↔ Backend documentation"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: /api-examples
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

---

## 6. `docs/index.md`

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
- [API Reference](/api-reference/openapi)

