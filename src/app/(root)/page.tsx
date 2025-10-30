import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import image1 from '@/images/photos/aron.png'
import image2 from '@/images/photos/jelentkezos.png'
import image3 from '@/images/photos/kormany.jpeg'
import image4 from '@/images/photos/uldogelos.png'
import image5 from '@/images/photos/barnus.png'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import postImage1 from '@/images/photos/post1.png'
import postImage2 from '@/images/photos/post2.png'
import postImage3 from '@/images/photos/post3.png'
import postImage4 from '@/images/photos/post4.jpg'
import postImage5 from '@/images/photos/post5.jpg'
import postImage6 from '@/images/photos/post6.jpg'
import postImage7 from '@/images/photos/post7.jpg'
import { Mail, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/diakparlamentek/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Részletek</Card.Cta>
    </Card>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Instagram post data dictionary and types
interface InstagramPost {
  href: string
  src: any
  alt: string
}

//   {
//    href: 'https://www.instagram.com/p/DP_EbNDjd88/',
//    src: postImage7,
//    alt: '10.17. Diákparlament',
//  },

const instagramPosts: InstagramPost[] = [
  {
    href: 'https://www.instagram.com/p/DPBECiAjf5j/',
    src: postImage6,
    alt: 'Elindult az FDÖ 2. Mentálhigéniás felmérése',
  },
  {
    href: 'https://www.instagram.com/p/DN0u91I2rGY/',
    src: postImage5,
    alt: 'Találkozz velünk a Diákszigeten',
  },
  {
    href: 'https://www.instagram.com/p/DMVQI6MttU7/',
    src: postImage4,
    alt: 'Elkészült a weboldal',
  },
  {
    href: 'https://www.instagram.com/p/DKuxmSpNGeb/',
    src: postImage1,
    alt: 'Efott kedvezmény',
  },
  {
    href: 'https://www.instagram.com/p/DJUj3kLNunn/',
    src: postImage2,
    alt: 'Elkezdődött a munka',
  },
  {
    href: 'https://www.instagram.com/p/DKpnsUuNuAP',
    src: postImage3,
    alt: 'Elfogadták a mentálhigéniás programot',
  },
]

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Fővárosi Diákönkormányzat
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A Fővárosi Diákönkormányzat Budapest csaknem 300 köznevelési
            intézményének (gimnáziumok, technikumok, szakképző iskolák)
            diák-érdekképviseleti ernyőszervezete. Célja, hogy a kb. 200 000
            fővárosi középiskolás közös hangjaként jelenjen meg a városháza, a
            kormányzati szereplők és a civil szféra előtt, s fórumot biztosítson
            a diákok javaslatainak, kritikáinak és projektjeinek.
          </p>
          <div className="mt-6 flex gap-6">
            <Link href="mailto:fovarosidiakonkormanyzat@gmail.com">
              <Mail className="text-zinc-700 hover:text-zinc-500 dark:text-zinc-300" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61563324692817"
              target="_blank"
            >
              <Facebook className="text-zinc-700 hover:text-zinc-500 dark:text-zinc-300" />
            </Link>
            <Link href="https://www.instagram.com/fovarosidok">
              <Instagram className="text-zinc-700 hover:text-zinc-500 dark:text-zinc-300" />
            </Link>
            {/* <Link href="#">
              <Linkedin className="text-zinc-700 hover:text-zinc-500 dark:text-zinc-300" />
            </Link> */}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="grid grid-cols-2 gap-4">
              {instagramPosts.map((post: InstagramPost, idx: number) => (
                <div className="group relative" key={post.href}>
                  <Link href={post.href} target="_blank" className="block">
                    {/* Image */}
                    <Image
                      src={post.src}
                      alt={post.alt}
                      className="border border-zinc-100 transition-opacity duration-200 group-hover:opacity-50 dark:border-zinc-700/40"
                    />
                    {/* Hover overlay */}
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-900/40 font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Megnézem <ArrowRight />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
