import React from 'react'
import BaseRouter from '../../routes.js'
import BannerComponent from '../../Components/Banner/BannerComponent'
import FooterComponent from '../../Components/FooterComponent/FooterComponent'
import '../../Footer.css'
import './Home.css'


function Home() {
    return (
            <div>
                <div className="home-container">
                    <div>
                        <div className="first">
                            <div className="banner">
                                <h3>Ingående företag</h3>
                                <BannerComponent/>
                                <BaseRouter />  
                            </div>
                        </div>
                    
                        <div className="second">
                            <div className="aktiviteter">
                                <h3>Aktiviteter i närtid</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <FooterComponent/>
                </div>
            </div>

    )
}

export default Home
