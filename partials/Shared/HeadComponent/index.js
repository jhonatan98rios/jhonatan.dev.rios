import Head from 'next/head'

export default function HeadComponent({content}) {

  return (
    <div>
      <Head>
        <title>{content.title}</title>
        <description>{content.description}</description>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
