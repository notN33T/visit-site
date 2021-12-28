import './css/greeting.css'
import { Link } from 'react-router-dom'

export default function Greeting() {
    return(
        <div className='greeting-c'>
            <div className='gif-c'>
                <p className='greeting-html-txt'>{ '<img>' }</p>
                <img src={require('./media/greet.gif')} alt="" />
                <p className='greeting-html-txt'>{ '</img>' }</p>
            </div>
            <p className='greeting-html-txt'>{ '<h1>' }</p>
            <h1 className='greeting-txt'>
                <p><span className='greeting-span'>H</span><span className='greeting-span'>i</span><span className='greeting-span'>,</span></p>
                <p><span className='greeting-span'>I</span><span className='greeting-span'>’</span><span className='greeting-span'>m</span>
                <span className='greeting-txt-e'> E</span><span className='greeting-span'>v</span><span className='greeting-span'>g</span><span className='greeting-span'>e</span><span className='greeting-span'>n</span>
                <span className='greeting-span'>y</span><span className='greeting-span'>,</span>    
                </p>
                <p><span className='greeting-span'>w</span><span className='greeting-span'>e</span><span className='greeting-span'>b</span>
                <span className='greeting-span'> d</span><span className='greeting-span'>e</span><span className='greeting-span'>v</span>
                <span className='greeting-span'>e</span><span className='greeting-span'>l</span><span className='greeting-span'>o</span>
                <span className='greeting-span'>p</span><span className='greeting-span'>e</span><span className='greeting-span'>r</span>
                </p>
            </h1>
            <p className='greeting-html-txt'>{ '</h1>' }</p>
            <br />
            <p className='greeting-html-txt'>{ '<button>' }</p>
            <br />
            <div className='contact-btn-c'>
                <Link to='contact' className='home-btn-contact'>Contact me</Link>
            </div>
            <br />
            <p className='greeting-html-txt'>{ '</button>' }</p>

        </div>
    )
}