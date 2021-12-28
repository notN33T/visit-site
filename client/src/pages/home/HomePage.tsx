import { useState }        from 'react'
import Loading             from '../../pages/common/Loading/Loading'
import Greeting            from './Components/Greeting/Greeting'
import './css/home.css'

export default function HomePage() {
    return (
        <div className='home-c'>
            <Greeting/>
        </div>
    )
}