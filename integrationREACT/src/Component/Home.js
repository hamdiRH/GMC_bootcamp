import React from 'react'

import Navbar from "./Navbar"
import Banner from "./Banner"
import Article1 from "./Article1"
import Article2 from "./Article2"
import Newsletter from "./Newsletter"
import Information from './Information'
import Category from "./Category"
import Article4 from "./Article4"
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Article1 />
            <Article2 />
            <Newsletter />
            <Information />
            <Category />
            <Article4 />
            <Footer />
        </>
    )
}

export default Home
