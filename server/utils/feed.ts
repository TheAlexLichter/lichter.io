// Credits to https://github.com/harlan-zw/harlanzw.com/blob/main/server/routes/feed.xml.ts
import { Feed } from 'feed'
import * as cheerio from 'cheerio'
import { queryCollection } from '@nuxt/content/server'
import type { H3Event } from 'h3'

export async function generateBlogFeed(event: H3Event) {
  const { url, name, currentLocale } = useSiteConfig(event)
  // Fetch all documents
  const feed = new Feed({
    title: `${name} | Blog`,
    id: url,
    link: url,
    language: currentLocale,
    image: withSiteUrl(event, `/__og-image__/image/articles/og.png`),
    favicon: withSiteUrl(event, `/img/logo/glyph-white-colored.svg`),
    generator: ';)',
    copyright: `Code licensed under MIT, written content licensed under CC-BY-NC-SA 4.0 - Alexander Lichter`,
    feedLinks: {
      rss: `${url}/feed.xml`,
    },
  })

  const posts = await queryCollection(event, 'articles').order('datePublished', 'DESC').all()

  for (const post of posts) {
    // this will return the SSR content of the post
    const content = await $fetch<string>(`${post.path}/`)
    let $ = cheerio.load(content)
    const prose = $('.prose').html()
    $ = cheerio.load(prose!)
    // remove all attributes from all elements
    $('*').each(function () {
      // @ts-ignore
      this.attribs = {}
    })
    const item = {
      title: post.title,
      id: withSiteUrl(event, post.path),
      link: withSiteUrl(event, post.path),
      description: post.description,
      content: $('body').html(),
      author: [
        {
          name: 'Alexander Lichter',
          link: url,
        },
      ],
      date: new Date(post.datePublished),
    }
    // TODO: Fix TS error
    // @ts-expect-error Whoops
    feed.addItem(item)
  }

  return feed
}
