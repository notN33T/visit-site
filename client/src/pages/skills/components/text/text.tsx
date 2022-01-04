import './css/text.css'

export default function Text() {
    return (
        <div className='text-c'>
            <div className="text-title">
                <p className="html-text">{'<h1>'}</p>
                <p className='title-txt'>MY SKILLs</p>
                <p className="html-text">{'</h1>'}</p>
            </div>
            <div className="text-txt">  
                <p className="html-text">{'<p>'}</p>
                <p className='main-skills-txt'>
                I have been doing web development for about four months.<br/><br/>
                During this time I worked with node technologies such as 
                express, jwt, passport, mongoose, ejs and several others.<br/><br/>
                As for the frontend, I've worked with React, Redux, SASS, 
                Bootstrap, fontawesome, and some other libraries.
                </p>
                <p className="html-text">{'</p>'}</p>
            </div>
        </div>
    )
}