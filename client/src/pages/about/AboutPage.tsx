import { useState }        from 'react'
import Loading             from '../../pages/common/Loading/Loading'

export default function AboutPage() {
    let [isLoaded, setIsLoaded] = useState(false)
    setTimeout( () => {setIsLoaded(true)}, 800)
    
    if(!isLoaded) return <Loading/> 

    return (
        <div>
            About page
        </div>
    )
}