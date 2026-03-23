// import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// export default defineConfig({
//   srcDir: "docs",

//   title: "DoGood documentation",
//   description: "Frontend ↔ Backend documentation",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Examples', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' }
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ]
//   }
// })

import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config

export default withMermaid(
  defineConfig({
    srcDir: "docs",

    title: "Project Documentation",
    description: "Frontend ↔ Backend documentation",
    lang: "uk-UA",

    themeConfig: {
      siteTitle: "Project Docs",
      // https://vitepress.dev/reference/default-theme-config

      nav: [
        { text: "Головна", link: "/" },
        // { text: "Examples", link: "/markdown-examples" },
        { text: "Архітектура", link: "/architecture/overview" },
        { text: "Сутності", link: "/entities/task" },
        { text: "Ендпоінти", link: "/endpoints/tasks/create-task" },
        { text: "API Reference", link: "/api-reference/openapi" },
      ],

      sidebar: [
        {
          text: "Вступ",
          items: [{ text: "Головна", link: "/" }],
        },
        {
          text: "Архітектура",
          items: [
            { text: "Overview", link: "/architecture/overview" },
            { text: "DTO and Models", link: "/architecture/dto-and-models" }
            // {
            //   text: "Frontend ↔ Backend Flow",
            //   link: "/architecture/frontend-backend-flow",
            // },
            // { text: "Auth Flow", link: "/architecture/auth-flow" },
          ],
        },
        {
          text: "Сутності",
          items: [
            // { text: "User", link: "/entities/user" },
            { text: "Task", link: "/entities/task" },
            // { text: "Organization", link: "/entities/organization" },
          ],
        },
        {
          text: "Ендпоінти",
          items: [
            {
              text: "Auth",
              items: [
                { text: "POST /auth/login", link: "/endpoints" },
                { text: "POST /auth/refresh", link: "/endpoints" },
                {
                  text: "GET /users/current",
                  link: "/endpoints/users",
                },
              ],
            },
            {
              text: "Tasks",
              items: [
                { text: "POST /tasks", link: "/endpoints/tasks/create-task" },
              ],
            },
          ],
        },
        {
          text: "Conventions",
          items: [
            { text: "Response Format", link: "/conventions/response-format" },
            { text: "Error Format", link: "/conventions/error-format" },
            { text: "Validation", link: "/conventions/validation" },
          ],
        },
        {
          text: "API Reference",
          items: [
            { text: "OpenAPI / Swagger", link: "/api-reference/openapi" },
          ],
        },
      ],

      socialLinks: [
        { icon: "github", link: "https://github.com/your-org/project-docs" },
      ],
    },

    markdown: {
      theme: "material-theme-palenight",
    },
    mermaid: {
      theme: "default",
    },
  })
);
