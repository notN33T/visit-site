import './css/tech.css'

export default function Tech() {
    return(
        <div className='about-tech-c'>
                <div className='tech-c'>
                    <span className="tech-html">HTML</span>
                    <img src={require('./media/html.png')} alt="" />
               </div>
               <div className='tech-c'>
                    <span className="tech-css">CSS</span>
                    <img src={require('./media/css.png')} alt="" />
               </div>
               <div className='tech-c'>
                    <span className="tech-sass">SASS</span>
                    <img src={require('./media/sass.png')} alt="" />
               </div>
               <div className='tech-c'>
                    <span className="tech-node">NODE.JS</span>
                    <img src={require('./media/node.png')} alt="" />
               </div>
               <div className='tech-c'>
                    <span className="tech-mongodb">MONGODB</span>
                    <img src={require('./media/mongodb.png')} alt="" />
               </div>
               <div className='tech-c'>
                    <span className="tech-express">EXPRESS</span>
                    <img src={require('./media/express.png')} alt="" />
               </div>
               <div className='tech-c'>
                    <span className="tech-react">REACT</span>
                    <img src={require('./media/react.png')} alt="" />
               </div>
               <div className='tech-c'>
                    <span className="tech-redux">REDUX</span>
                    <img src={require('./media/redux.png')} alt="" />
               </div>
               <div className="tech-c">
                    <span className="tech-mysql">MYSQL</span>
                    <img src={require('./media/mysql.png')} alt="" />
               </div>
               <div className="tech-c">
                    <span className="tech-git">Git</span>
                    <img src={require('./media/git.png')} alt="" />
               </div>
               <div className="tech-c">
                    <span className="tech-ts">TypeScript</span>
                    <img src={require('./media/typescript.png')} alt="" />
               </div>
               <div className="tech-c">
                    <span className="tech-npm">npm</span>
                    <img src={require('./media/npm.png')} alt="" />
               </div>
            </div>
    )
}