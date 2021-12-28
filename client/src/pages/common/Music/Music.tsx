import './css/music.css'
import {useState}           from 'react'
const myAudio = require('./audio/PTNSomething.mp3')

export default function Music() {
    let [song, setSong] = useState(new Audio(myAudio))
    let [isPlayed, setIsPlayed] = useState(false)
    song.addEventListener('ended', () => {song.play()})
    const playSwitcher = () => {
        if(isPlayed){
            setIsPlayed(false)
            song.pause()
            return
        } 
        setIsPlayed(true)
        song.play()
    }
    return(
        <p
        onClick={playSwitcher} 
        className='music-c'>
            <span className='music-span'>Music</span>
            <span className={'music-status-spn played-'+ `${isPlayed}`}>{isPlayed?'on':'off'}</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headphones-simple" className={'music-icon played-'+ `${isPlayed}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C112.9 32 4.563 151.1 0 288v104C0 405.3 10.75 416 23.1 416S48 405.3 48 392V288c0-114.7 93.34-207.8 208-207.8C370.7 80.2 464 173.3 464 288v104C464 405.3 474.7 416 488 416S512 405.3 512 392V287.1C507.4 151.1 399.1 32 256 32zM160 288L144 288c-35.34 0-64 28.7-64 64.13v63.75C80 451.3 108.7 480 144 480L160 480c17.66 0 32-14.34 32-32.05v-127.9C192 302.3 177.7 288 160 288zM368 288L352 288c-17.66 0-32 14.32-32 32.04v127.9c0 17.7 14.34 32.05 32 32.05L368 480c35.34 0 64-28.7 64-64.13v-63.75C432 316.7 403.3 288 368 288z"></path></svg>
        </p>
    )
}