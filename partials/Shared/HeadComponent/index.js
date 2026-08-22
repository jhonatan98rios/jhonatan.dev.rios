import Head from 'next/head'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jhonatan-dev-rios.vercel.app'
const SITE_NAME = 'Jhonatan Teixeira Rios'
const DESCRIPTION = 'Software developer portfolio of Jhonatan Teixeira Rios. Cloud, data engineering and full-stack projects.'

export default function HeadComponent({ content }) {
  const title = content.title === SITE_NAME ? SITE_NAME : `${content.title} | ${SITE_NAME}`
  const url = content.path ? `${SITE_URL}${content.path}` : SITE_URL
  const description = content.description || DESCRIPTION
  const image = `${SITE_URL}/avatar@2x.png`

  const jsonLd = content.person ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: 'Data Engineer',
    sameAs: [
      'https://github.com/jhonatan98rios',
      'https://www.linkedin.com/in/jhonatan-teixeira-rios-499400128/',
      'https://www.youtube.com/channel/UCO0Wn-Pd5Y5ELJ7Nrl2SVLQ',
      'https://www.instagram.com/jhonatan.teixeira.rios/',
      'https://www.jhonatan-dev-rios-blog.com.br/'
    ]
  } : null

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={SITE_NAME} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  )
}
