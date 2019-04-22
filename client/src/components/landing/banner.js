import React, { Component } from 'react'
import maggoldlogo from '../../images/maggoldlogo.png'
import { Link } from "react-router-dom"

class banner extends Component {
    constructor(){
        super();
        this.state ={
            magnewCont:['Read 5,000+ magazines','Access premium articles']
        }
    }
  render() {
    return (
        <section className="mgbannerBlock clearboth">
        <section className="container">
            <section className="mgbannercontInfo">
                <section className="mgbannercontInfoinner">
                    <figure>
                        <img src={maggoldlogo} alt="Magzter Gold" title="Magzter Gold" />
                    </figure>
                    <h4>Indulge in unlimited digital reading like how millions already have </h4>
                    <section className="magnewspapper">
                        <ul className="clearboth">
                            {this.state.magnewCont.map((item,index) =>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                      
                        <Link to="/" className="btn btnTryfree">TRY FREE FOR 7 DAYS</Link>
                        <span className="freetrial">After the free trial, your subscription will be renewed at  $9.99/month. However, you can cancel the subscription anytime.</span>
                        <p className="or"><span>or</span></p>
                        <p className="offPrice"><strike><span className="origPrice">$99.99</span></strike> $49.99/Year</p>
                        <Link to="/" className="btn btnClaim">Claim Now for <strike><span>$99.99</span></strike> $49.99/Year</Link>
                        <span className="freetrial">Hurry, Limited Period Offer!</span>
                    </section>
                </section>
            </section>
        </section>
    </section>
    )
  }
}
export default banner