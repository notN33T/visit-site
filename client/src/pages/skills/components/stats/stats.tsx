import './css/stats.css'

export default function Stats() {
    return (
        <div className='stats-c'>
            <div className="stats-js">
                <p className='stats-txt stats-txt-js'>JavaScript</p>
                <div className="stats-g-c">
                    <div className="stats-js-g g-a"></div>
                </div>
            </div>
            <div className='stats-html'>
                <p className='stats-txt stats-txt-html'>html</p>
                <div className="stats-g-c">
                    <div className="stats-html-g g-a"></div>
                </div>
            </div>
            <div className='stats-css'>
                <p className='stats-txt stats-txt-css'>css</p>
                <div className="stats-g-c">
                    <div className="stats-css-g g-a"></div>
                </div>
            </div>
            <div className="stats-react">
                <p className='stats-txt stats-txt-react'>react</p>
                <div className="stats-g-c">
                    <div className="stats-react-g g-a"></div>
                </div>
            </div>
            <div className="stats-node">
                <p className='stats-txt stats-txt-node'>node</p>
                <div className="stats-g-c">
                    <div className="stats-node-g g-a"></div>
                </div>
            </div>
            <div className="stats-mongo">
                <p className='stats-txt stats-txt-mongo'>mongoDB</p>
                <div className="stats-g-c">
                    <div className="stats-mongo-g g-a"></div>
                </div>
            </div>
        </div>
    )
}