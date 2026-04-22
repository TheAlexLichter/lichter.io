const TOPIC_TITLE_OVERRIDES: Record<string, string> = {
  'api': 'API',
  'composition-api': 'Composition API',
  'css': 'CSS',
  'html': 'HTML',
  'javascript': 'JavaScript',
  'php': 'PHP',
  'seo': 'SEO',
  'ssr': 'SSR',
  'typescript': 'TypeScript',
  'unjs': 'UnJS',
  'vite-plus': 'Vite+',
}

export function topicTitle(slug: string): string {
  return TOPIC_TITLE_OVERRIDES[slug] ?? slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
