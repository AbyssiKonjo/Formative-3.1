import { useParams } from "react-router-dom"
import { useArticlesContext } from "../hooks/useArticleContext"

const SingleArticle = () => {
  const {id} = useParams()
  const {articles} = useArticlesContext()

  const article = articles[id]

  return (
    <div className='single-article-page'>
      <img src={article.urlToImage} alt={article.title + " Image"} />
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <p>{article.content}</p>
      <a href={article.url} target="_blank">See Full Article</a>
    </div>
  )
}

export default SingleArticle
