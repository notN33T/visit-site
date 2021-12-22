import Page404                      from '../pages/p404/Page404'
import HomePage                     from '../pages/home/HomePage'
import AboutPage                    from '../pages/about/AboutPage'
import SkillsPage                   from '../pages/skills/SkillsPage'
import ContactPage                  from '../pages/contact/ContactPage'
import {Routes, Route}              from 'react-router-dom'


export default function useRouter() {
    return(
        <Routes>
                <Route path='/'         element={<HomePage/>} />
                <Route path='/about'    element={<AboutPage/>}/>
                <Route path='/skills'   element={<SkillsPage/>}/>
                <Route path='/contact'  element={<ContactPage/>}/>
                <Route path='/404'      element={<Page404/>}/>
            <Route path='/*' element={<Page404/>}/>
        </Routes>
    )
}