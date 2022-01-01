import './css/tech.css'

export default function Tech() {
    return(
        <div className='about-tech-c'>
               <div className='tech-c'>
                    <span className="tech-css">CSS</span>
                    <img src={require('./media/css.png')} className="tech-css" alt="css" />
               </div>
               <div className='tech-c'>
                    <span className="tech-html">HTML</span>
                    <img src={require('./media/html.png')} className="tech-html" alt="html" />
               </div>
               <div className='tech-c'>
                    <span className="tech-sass">SASS</span>
                    <img src={require('./media/sass.png')} className="tech-sass" alt="sass" />
               </div>
               <div className='tech-c'>
                    <span className="tech-node">NODE.JS</span>
                    <img src={require('./media/node.png')} className="tech-node" alt="node.js" />
               </div>
               <div className='tech-c'>
                    <span className="tech-mongodb">MONGODB</span>
                    <img src={require('./media/mongodb.png')} className="tech-mongodb" alt="mongodb" />
               </div>
               <div className='tech-c'>
                    <span className="tech-js">JavaScript</span>
                    <img src={require('./media/js.png')} className="tech-js" alt="js" />
               </div>
               <div className='tech-c'>
                    <span className="tech-react">REACT</span>
                    <img src={require('./media/react.png')} className="tech-react" alt="react" />
               </div>
               <div className='tech-c'>
                    <span className="tech-redux">REDUX</span>
                    <img src={require('./media/redux.png')} className="tech-redux" alt="redux" />
               </div>
               <div className="tech-c">
                    <span className="tech-mysql">MYSQL</span>
                    <img src={require('./media/mysql.png')} className="tech-mysql" alt="mysql" />
               </div>
               <div className="tech-c">
                    <span className="tech-git">Git</span>
                    <img src={require('./media/git.png')} className="tech-git" alt="git" />
               </div>
               <div className="tech-c">
                    <span className="tech-ts">TypeScript</span>
                    <img src={require('./media/typescript.png')} className="tech-ts" alt="ts" />
               </div>
               <div className="tech-c">
                    <span className="tech-npm">npm</span>
                    <img src={require('./media/npm.png')} className="tech-npm" alt="npm" />
               </div>
            </div>
    )
}