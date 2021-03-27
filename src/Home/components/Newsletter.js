import React from 'react'
import subscribe from '../../img/subscribe.jpg'
function Newsletter() {
    return (
        <>
        <section className="container mt-3 mb-2">
        <div className="row">
          <div className="col-md-6" id="displaycenter">
            <div id="signup">
             <h3 className="jointitle" >JOIN US FOR FREE TO GET INSTANT <span style={{color: '#fc636b'}}>EMAIL UPDATES!</span></h3>
             <p className="joinpara">Subscribe and get notified at first on the latest update and offers!</p>
             <form action="/subscribe" method="POST" className="form-inline mt-5 text-center">
               <div className="input-group input-group-lg">
                 <input type="email" id="email" name="email"  style={{background: '#f1eeee', border:'none',color: '#232020'}} className="form-control" placeholder="Your Email Here" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                 <div className="input-group-append">
                   <input type="submit" className="btn" style={{backgroundColor: '#f65a5b',color: 'white'}} value="Join Now" id="cta"/>
                 </div>
               </div>
             </form>
             <div>
               <p id="error" className="error lead">Please enter an email</p>
             </div>
            </div>
            <div id="success" className="inner-form" style={{marginTop:'100px',marginLeft:'100px'}} >
             <h3 className="jointitle">CONFIRM YOUR <span style={{color: '#fc636b'}}>EMAIL NOW!</span></h3>
             <p className="joinpara">The last step is to confirm your email. Give it a couple minutes!</p>
           </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src={subscribe}  className="img-fluid" style={{height: '25em',width:'100%'}} alt="" />
          </div>
        </div>
    </section>   
        </>
    )
}

export default Newsletter
