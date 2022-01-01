import { useState }        from 'react'
import Loading             from '../../pages/common/Loading/Loading'
import Aboute              from './Components/Aboute/Aboute'
import Tech                from './Components/Tech/Tech'
import './css/about.css'

export default function AboutPage() {
    let [isLoaded, setIsLoaded] = useState(false)
    setTimeout( () => {setIsLoaded(true)}, 500)
    
    if(!isLoaded) return <Loading/> 

    return (
        <div className='about-c'>
            <Aboute/>
            <Tech/>
        </div>
    )
}