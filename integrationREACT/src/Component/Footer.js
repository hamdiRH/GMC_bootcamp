import React from 'react'

import r1 from "../asset/r1.jpg"
import r2 from "../asset/r2.jpg"
import r3 from "../asset/r3.jpg"
import r4 from "../asset/r4.jpg"
import r5 from "../asset/r5.jpg"

const Footer = () => {
    return (
        <div className="footer">
            <center>
                <p>
                    <span>APUT </span> -
                    <span>TERMS AND CONDITIONS</span> -
                    <span>SYMU FREENIES</span> -
                    <span>CONTACT US</span> 
                </p>
                <p className="footerpara">This tempalte is free to use for personal or commercial project, attribution is appreciated but not required.<br />
                    if you have any additional questions that may not have benn answered above, please dont hesitate to contaact us at contact@symu.co
                </p>
                <div className="socialmedia">
                    <img src={r1} alt="r1" />
                    <img src={r2} alt="r1" />
                    <img src={r3} alt="r1" />
                    <img src={r4} alt="r1" />
                    <img src={r5} alt="r1" />
                </div>
            </center>

        </div>
    )
}

export default Footer
