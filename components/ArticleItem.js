import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

export default function ArticleItem({article}) {
  return (
    // to specify link dynamically
    // now if we click a article it will go to article/id
    // but how to create that page we can do by creating a folder in pages as article -> [id] -> index.js
    // so it will automatically go to that page
    <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
        <a className={articleStyles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.excerpt}</p>
        </a>
    </Link>
  )
}
