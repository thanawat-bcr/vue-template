# Project Setup

## Scaffolding Your First Vite Project

**Please install as Root Deirectory!**

```sh
npm create vite@latest <project-name>
```

### Follow the Prompt

- Select a framework: `Vue`
- Select a variant: `Customize with create-vue`

### Vue.js Project Create setup

- Add TypeScript: `Yes`
- Add JSX: `No`
- Add Vue Router: `Yes`
- Add Pinia: `Yes`
- Add Unit Testing: `No`
- Add E2E Testing: `No`
- Add ESLint: `Yes`
- Add Prettier: `No`
- Add DevTools: `Yes`

### Install Dependencies

```sh
cd <project-name>
```

Remove `@rushstack/eslint-patch` in `package.json` from Dev Dependencies

```sh
npm install
npm run dev
```

### ESLint Configuration

1. Delete `.eslintrc.cjs` File
2. Install `@antfu/eslint-config`
   ```sh
   npm install -D @antfu/eslint-config
   ```
3. Create `eslint.config.js` File

   ```js
   import antfu from '@antfu/eslint-config'

   export default antfu({
     formatters: true,
     vue: true,
   })
   ```

4. Update `.vscode/settings.json` for project settings

   ```json
   {
     // Disable the default formatter, use eslint instead
     "prettier.enable": false,
     "editor.formatOnSave": false,

     // Auto fix
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit",
       "source.organizeImports": "never"
     },

     // Silent the stylistic rules in you IDE, but still auto fix them
     "eslint.rules.customizations": [
       { "rule": "style/*", "severity": "off" },
       { "rule": "format/*", "severity": "off" },
       { "rule": "*-indent", "severity": "off" },
       { "rule": "*-spacing", "severity": "off" },
       { "rule": "*-spaces", "severity": "off" },
       { "rule": "*-order", "severity": "off" },
       { "rule": "*-dangle", "severity": "off" },
       { "rule": "*-newline", "severity": "off" },
       { "rule": "*quotes", "severity": "off" },
       { "rule": "*semi", "severity": "off" }
     ],

     // Enable eslint for all supported languages
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact",
       "vue",
       "html",
       "markdown",
       "json",
       "jsonc",
       "yaml",
       "toml",
       "xml",
       "gql",
       "graphql",
       "astro",
       "css",
       "less",
       "scss",
       "pcss",
       "postcss"
     ]
   }
   ```

5. Install `eslint-plugin-format`
   ```sh
   npm i -D eslint-plugin-format
   ```

#### Testing

1. Code should be fix after `save` by `cmd+s` or `ctrl+s`
2. There should not show `Red Squiggly Lines` on some errors such as `double-quoting`

### Unplugin Auto Imports & Vue Components

1. Install Dependencies
   ```sh
   npm i -D unplugin-auto-import unplugin-vue-components
   ```
2. `vite.config.js`

   ```js
   // ...
   import AutoImport from 'unplugin-auto-import/vite'
   import Components from 'unplugin-vue-components/vite'

   export default defineConfig({
     plugins: [
       // ...
       AutoImport({
         imports: ['vue', 'vue-router', 'pinia'],
         dirs: ['./src/composables', './src/configs', './src/stores'],
       }),
       Components({
         dirs: ['./src/components', './src/layouts'],
       }),
     ],
     // ...
   })
   ```

3. Generate `auto-imports.d.ts` and `components.d.ts` by

   ```sh
   npm run dev
   ```

   **Noted:** both files will be auto re-generate after server running

   **Noted:** both files should be ignored by `git`

4. Add `auto-imports.d.ts` and `components.d.ts` to `tsconfig.app.json`

   ```json
   {
     // ...
     "include": ["env.d.ts",
       "auto-imports.d.ts", "components.d.ts" // ...
     ]
   }
   ```

#### Testing

1. `import { ref } from 'vue'` should not appear after create new ref (no-import in code)
2. `import App from './App.vue'` in `main.ts` can be removed without error
3. `import router from './router'` in `main.ts` can be removed without error

### Tailwind

1. Install Dependencies
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   ```
2. generate your `tailwind.config.js` and `postcss.config.js` files.
   ```sh
   npx tailwindcss init -p
   ```
3. `tailwind.config.js`

   ```js
   export default {
     content: [
       './index.html',
       './src/**/*.{vue,js,ts,jsx,tsx}',
     ],
     // ...
   }
   ```

   **Noted** If tailwind error on `content` please check [tailwind documents](https://tailwindcss.com/docs/guides/vite), sometime markdown detect astericks then makes code not accurate.

4. Add Tailwind to `main.css`

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. Remove Others CSS such as `base.css` or `<style></style>` inside components (Prevent style conflicts)

#### Testing

1. Add `class='text-red-500'` to any div with text, it should be red text.

### Primevue + Primeicons

1. Install Dependencies

   ```sh
   npm install primevue primeicons
   ```

2. Import `PrimeVue` and `Theme` to `main.ts`

   ```ts
   // ...
   // Choose preferred theme
   import 'primevue/resources/themes/aura-light-blue/theme.css'

   import PrimeVue from 'primevue/config'

   // ...
   app.use(PrimeVue)
   // ...
   ```

3. Import `PrimeVueResolver` to `vite.config.js`

   ```js
   // ...
   import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

   // ...
   export default defineConfig({
     plugins: [
       // ...
       Components({
         dirs: ['./src/components', './src/layouts'],
         resolvers: [PrimeVueResolver()],
       }),
     ],
     // ...
   })
   ```

4. Update `main.css` to config `Tailwind` with `PrimeVue`

   ```css
   @import 'primeicons/primeicons.css';

   @layer tailwind-base, primevue, tailwind-utilities;

   @layer tailwind-base {
     @tailwind base;
   }

   @layer tailwind-utilities {
     @tailwind components;
     @tailwind utilities;
   }
   ```

5. Update `.vscode.setting` for `Tailwind` and `PrimeVue`

   ```json
   {
     // ...
     // Tailwind & PrimeVue
     "files.associations": {
       "*.css": "tailwindcss"
     },

     "editor.quickSuggestions": {
       "strings": "on"
     },

     "tailwindCSS.experimental.classRegex": [
       ["pt:\\s*{([^)]*)\\s*}[, }]", "[\"'`]([^\"'`]*).*?[\"'`]"],
       ["/\\* pt \\*/\\s*{([^;]*)}", ":\\s*[\"'`]([^\"'`]*).*?[\"'`]"]
     ],

     "tailwindCSS.classAttributes": [
       "table-class",
       "header-class",
       "body-class",
       "class",
       "pt"
     ]
   }
   ```
