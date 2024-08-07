import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useArticlesContext } from "../hooks/useArticleContext"

// API KEY
const apiKey = import.meta.env.VITE_NEWS_API_KEY

const Health = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
  
    // state and dispatch
    const {articles, dispatch} = useArticlesContext()
  
    useEffect(() => {
      setLoading(true)
      // fetch function
      const fetchArticles = async () => {
        await axios.get(`https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=${apiKey}`)
          .then(response => {
            console.log(response.data.articles)
            dispatch({type: 'GET_ARTICLES', payload: response.data.articles})
            setLoading(false)
          })
          .catch(error => {
            console.log(error)
            setLoading(true)
          })
      }
      fetchArticles()
    }, []) 
  
    const handleReadMoreClick = (index) => {
      console.log(index);
      navigate(`/article/${index}`)
    }
  
    // mapped articles component
    const Articles = ({articles}) => {
      const mappedArticles = articles.map((article, index) => {
        // map return
        return (
          <div key={index} className='article' onClick={() => handleReadMoreClick(index)}>
            <img src={article.urlToImage} alt={article.title + " Image"} />
            <h2>{article.title}</h2>
            <button onClick={() => handleReadMoreClick(index)}>Read More</button>
          </div>
        )
      })
      // Articles Component return:
      return (
        <>
          {mappedArticles}
        </>
      )
    }

    // What Users See
    return (
      <div className='health-page'>
        <header>HEALTH NEWS</header>
  
        <div className='article-container'>
          {loading ? (
            <div>Loading Health Page Please Wait...</div>
          ) : (
            <Articles articles={articles}/>
          )}
        </div>
  
      </div>
    )
}

export default Health
