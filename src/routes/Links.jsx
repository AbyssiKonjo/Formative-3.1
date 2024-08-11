import { Routes, Route } from "react-router-dom"
// PAGES
import Home from "../components/pages/Home"
import SingleArticle from "../components/pages/SingleArticle"
import About from "../components/pages/About"
import News from "../components/pages/News"
import Health from "../components/pages/Health"
import Sports from "../components/pages/Sports"
import General from "../components/pages/General"
import Business from "../components/pages/Business"
import Science from "../components/pages/Science"
import Entertainment from "../components/pages/Entertainment"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/general' element={<General/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/health' element={<Health/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/science' element={<Science/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/article/:id' element={<SingleArticle/>}/>
    </Routes>
  )
}

export default Links
