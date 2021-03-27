import React from 'react'
import ab1 from '../../img/ab1.png'

function Fitness() {
    return (
        <>
        <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="mb-5">
               <h5 style={{color:'#f65a5b',fontSize: '34px',fontFamily: 'Oswald, sans-serif',letterSpacing: '1px',fontWeight: '500'}}>Fitness And Health</h5>
              </div>
              <p id="fitness-detail">Health and fitness are related, and it is impossible to achieve one without paying heed to the other.
                Staying Healthy is essential to work correctly and live productively. <br/>
                Fitness is crucial as it helps us to work without facing difficulties and increases our resistance to disease-causing germs.
                Not only does staying fit facilitates our workability,but also helps but to be happy and content.
              </p>
            </div>
            <div className="col-md-4">
              <img src={ab1} className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </section> 
        </>
    )
}

export default Fitness
