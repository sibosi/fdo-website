import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? ''

  if (siteUrl === undefined)
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')

  if (siteUrl === '') console.warn('NEXT_PUBLIC_SITE_URL is empty')

  let author = {
    name: 'Fővárosi Diákparlament',
    email: 'fovarosidiakonkormanyzat@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articleIds = require
    .context('../diakparlamentek', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

  for (let id of articleIds) {
    let url = String(new URL(`/diakparlamentek/${id}`, req.url))
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/diakparlamentek/${id}`
    let article = $('article').first()
    let title = article.find('h1').first().text()
    let date = article.find('time').first().attr('datetime')
    let content = article.find('[data-mdx-content]').first().html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
