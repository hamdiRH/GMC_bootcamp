import React from 'react'

import image1 from "../asset/ZEJWTGXOEE.jpg"
import image2 from "../asset/7FMZC77KOO.jpg"
import image3 from "../asset/5OTFJYVYSE.jpg"

const Category = () => {
    return (
        <div className="category">
            <h1>MEI</h1>
            <h1>CIBO</h1>
            <h1>EUM</h1>
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
        </div>
    )
}

export default Category
