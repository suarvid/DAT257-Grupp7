import React from 'react'
import BaseRouter from '../../routes.js'
import BannerComponent from '../../Components/Banner/BannerComponent'
import './Home.css'

function Home() {
    return (
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
    )
}

export default Home
