import { useState }        from 'react'
import Loading             from '../../pages/common/Loading/Loading'
import './css/about.css'

export default function AboutPage() {
    let [isLoaded, setIsLoaded] = useState(false)
    setTimeout( () => {setIsLoaded(true)}, 800)
    
    if(!isLoaded) return <Loading/> 

    return (
        <div className='about-c'>
            <div className='about-info-c'>
                <div className='about-title-c'>
                    <p className='html-txt'>{'<h1>'}</p>
                    <p className='about-title'>About me</p>
                    <p className='html-txt'>{'</h1>'}</p>
                </div>
                <div className="about-text-c">
                    <p className='html-txt'>{'</p>'}</p>
                    <p className='about-text'>I am begginer web developer from Belarus.
                    At this moment i leave in the city of Minsk. Also, im third year
                    student of the university BNTU.</p>
                    <p className='html-txt'>{'</p>'}</p>
                </div>
            </div>

            <div className='about-tech-c'>
                CSS SASS NODE.JS REACT REDUX EXPRESS HTML MONGODB MYSQL
            </div>
        </div>
    )
}