import React from 'react'

import image from "../asset/Banner.jpg"

const Banner = () => {
    return (
        <div className="divbanner">
            <h1 className="bannertext">Free</h1> <h1 className="bannertext2">Template </h1>
            <img src={image} alt="banner" className="banner" />
        </div>
    )
}

export default Banner
