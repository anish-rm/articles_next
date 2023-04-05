import Head from "next/head"

// this for stable title in all pages

export default function Meta({title, keywords, description}) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title : 'WebDev Newz',
    keywords: 'we development, programming',
    description: 'Get the latest news in web'
}