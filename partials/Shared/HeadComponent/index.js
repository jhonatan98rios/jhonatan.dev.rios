import Head from 'next/head'

export default function HeadComponent({content}) {

  return (
    <Head>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:locale" content="en_US" />
    	<meta property="og:site_name" content="Jhonatan Teixeira Rios" />
    	<meta property="og:description" content={content.description} />
    	<meta property="og:image" content="/favicon.ico" />
    </Head>
  )
}
