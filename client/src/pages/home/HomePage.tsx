import { useState, useEffect }  from 'react'
import Loading             from '../../pages/common/Loading/Loading'
import Greeting            from './Components/Greeting/Greeting'
import './css/home.css'

export default function HomePage() {
    let [isLoaded, setIsLoaded] = useState(false)
    useEffect(()=> {
        setIsLoaded(true)
    }, [isLoaded])
    
    if(!isLoaded) return <Loading/> 
    return (
        <div className='home-c'>
            <Greeting/>
        </div>
    )
}