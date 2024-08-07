import { Routes, Route } from "react-router-dom"
// PAGES
import Home from "../components/pages/Home"
import SingleArticle from "../components/pages/SingleArticle"
import About from "../components/pages/About"
import News from "../components/pages/News"
import Health from "../components/pages/Health"
import Sports from "../components/pages/Sports"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/health' element={<Health/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/article/:id' element={<SingleArticle/>}/>
    </Routes>
  )
}

export default Links
