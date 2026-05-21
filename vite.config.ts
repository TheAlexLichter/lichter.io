import { defineConfig } from 'vite-plus';

export default defineConfig({
  fmt: {},
  lint: {
    jsPlugins: [
      {
        name: 'vite-plus',
        specifier: 'vite-plus/oxlint-plugin',
      },
    ],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
    },
    overrides: [
      {
        files: ['nuxt.config.ts'],
        rules: {
          'vite-plus/prefer-vite-plus-imports': 'off',
        },
      },
    ],
    options: {
      typeAware: true,
      typeCheck: false,
    },
  },
  run: {
    tasks: {
      'nuxt:dev': {
        command: 'nuxt dev',
        cache: false,
      },
      'nuxt:build': {
        command: 'nuxt build',
        input: [{ auto: true }, '!dist/**', '!.output/**', '!.nuxt/**'],
      },
      'nuxt:generate': {
        command: 'nuxt generate',
        input: [{ auto: true }, '!dist/**', '!.output/**', '!.nuxt/**'],
      },
    },
  },
});
