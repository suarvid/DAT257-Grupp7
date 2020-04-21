import React from 'react'
import BaseRouter from '../../routes.js'
import './Home.css'
import BannerComponent from '../../BannerComponent'
function Home() {
    return (
        <div>
        
            <div className="first">
                <div className="banner">
                    <h3>Ingående företag</h3>
                    <BannerComponent/>       
                </div>
            </div>
            <div className="second">
                <div className="aktiviteter">
                    <h3>Aktiviteter i närtid</h3>
                </div>
            </div>
            
            <BaseRouter />
        </div>
    )
}

export default Home
