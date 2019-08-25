import React from 'react'

import image from "../asset/article2.jpg"
import image2 from "../asset/article2.1.jpg"

const Article2 = () => {
    return (
        <div className="article2">
            <div className="bloc1"></div>
            <div className="bloc2"></div>
            <div className="article2-1">
                <h2>08/07</h2>
                <img src={image} alt="article1" className="imgarticle2" />
                <h1 className="article2-tit">EOS NO LIBER LUDICABIT.</h1>
            </div>
            <div className="article2-2">
                <h2 className="article2-title">EA EUM CIBOT <br /><span>GRAECE</span></h2>
                <p className="article2-para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat non provident, sunt in culpa qui offica deserunt mollint anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                <p>read more... </p>

                <br />

                <h2 style={{ textAlign: "end" }}>15/07</h2>
                <img src={image2} alt="article1" className="imgarticle21" />
            </div>
        </div>
    )
}

export default Article2
