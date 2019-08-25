import React from 'react'

import image from "../asset/article1.jpg"

const Article1 = () => {
    return (
        <div className="article1">
            <div>
                <h1>HINK NOBUS  DUO UT</h1>
                <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odi aut fugit, sed quia consequntur
                <br /><span className="readmore">read more...</span></p>
            </div>
            <div>
                <h2 style={{ textAlign: "end" }}>07/08</h2>
                <img src={image} alt="article1" className="imgarticle1" />
            </div>


        </div>
    )
}

export default Article1
