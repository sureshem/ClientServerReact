import React, { Component } from 'react'
import cicon1 from  "../../images/cicon1.png";
import { Link, NavLink } from "react-router-dom";
class menubar extends Component {
    constructor(props){
        super(props);
        this.state ={
            menuitems:['MAGAZINES','ARTICLES','NEWSPAPERS','OFFERS','SRZ','HELP'],
            offerMenuitems:['GIFT CARD','DOWNLOAD APP','REFER & EARN']
        }
    }
    onActivemenu(index){
        this.setState({
            activeItem:index
        })
    }
  render() {
    return (
      <div>
         <aside className="overlay" onClick={this.props.onClick}></aside>
        <section className="menulist">
            {/* <Link to="/" className="closeMenu" onClick={this.props.closePopup}></Link> */}
            <Link to="/" className="closeMenu" onClick={this.props.onClick}></Link>
            <section className="langCounty clearboth">
                <ul className="langCntry">
                    <li><Link to="/"><img src={cicon1} alt="" /></Link></li>
                    <li><Link to="/">IN</Link></li>
                </ul>
            </section>
            <section className="signinout clearboth">
                <p><Link to="/">Register</Link><span>/</span><Link to="/">Login</Link></p>
            </section>
            <section className="menulists clearboth">
                <ul>
                    {this.state.menuitems.map((item,index) => 
                    <li key={index} className={this.state.activeItem === 'index' ? 'active' : ''} onClick={this.onActivemenu.bind(this)}><NavLink onClick={this.props.onClick} to="/" alt={item} title={item}>{item}</NavLink></li>
                    )}
                </ul>
            </section>
            <section className="othermenulist clearboth">
                <ul>
                    {this.state.offerMenuitems.map((listitems,index) =>  
                        <li key={index}><NavLink to="/" alt={listitems} title={listitems}>{listitems}</NavLink></li>
                    )}
                </ul>
            </section>
        </section>
      </div>
    )
  }
}
export default menubar