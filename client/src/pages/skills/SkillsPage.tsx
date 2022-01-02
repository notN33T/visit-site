import { useState }        from 'react'
import Loading             from '../../pages/common/Loading/Loading'
import Text                from './components/text/text'
import Stats               from './components/stats/stats'
import './css/skills.css'

export default function SkillsPage() {
    let [isLoaded, setIsLoaded] = useState(false)
    setTimeout( () => {setIsLoaded(true)}, 500)
    
    if(!isLoaded) return <Loading/> 
    
    return (
        <div className='skills-c'>
            <Text/>
            <Stats/>
        </div>
    )
}