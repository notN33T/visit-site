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
                    <p className='about-text'>
                        I am begginer web developer from Belarus.
                        At this moment i leave in the city of Minsk. Also, im third year
                        student at BNTU university.
                    </p>
                    <p className='about-text'>
                        I started programming about 3 years ago, but i got serious goals
                        and motivation for becoming a full-stack developer about 4 mounthes ago.
                        Since this time i builded some projects, learned how to deploy my project on
                        host, how to create front-end and back-end, solved hundreds of errors :)
                    </p>
                    <p className='about-text'>
                        At my free time, i like to play games, create Lo-Fi music
                        or watch stuff(youtube, anime, twitch) in English to improove 
                        my knowledge of this language.
                        By the way, one of my songs
                        you can hear on this web-site.
                    </p>
                    <p className='html-txt'>{'</p>'}</p>
                </div>
            </div>

            <div className='about-tech-c'>
               <div className='tech-c'>
                    <span className="tech-css">CSS</span>
               </div>
               <div className='tech-c'>
                    <span className="tech-sass">SASS</span>
               </div>
               <div className='tech-c'>
                    <span className="tech-node">NODE.JS</span>
               </div>
               <div className='tech-c'>
                    <span className="tech-react">REACT</span>
               </div>
               <div className='tech-c'>
                    <span className="tech-redux">REDUX</span>
               </div>
               <div className='tech-c'>
                    <span className="tech-express">EXPRESS</span>
               </div>
               <div className='tech-c'>
                    <span className="tech-html">HTML</span>
               </div>
               <div className='tech-c'>
                    <span className="tech-mongodb">MONGODB</span>
               </div>
               <div className="tech-c">
                    <span className="tech-mysql">MYSQL</span>
               </div>
            </div>
        </div>
    )
}