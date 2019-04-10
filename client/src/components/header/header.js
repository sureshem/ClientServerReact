import React, { Component } from 'react';
import maglogo from  "../../images/magLogo.png";
import searchlogo from  "../../images/searchicon.png";
import Menubar from "../../components/header/menubar"
import { Link } from "react-router-dom";
class header extends Component {
    constructor(){
        super();
        this.state ={
            menuopen:false
        }
    }
    onMenuopen(){
        this.setState({
            menuopen:!this.state.menuopen
        })
    }
  
    render() {
        let slideClass;
        this.state.menuopen ? slideClass="open" : slideClass=""
    return (
        //  onClick={this.onClassAdd.bind(this)} className={newclass.join(' ')}
        <header>
            
        <section className="container">
            {/* <section   className={this.state.menuopen ? 'menublock menuopen' : 'menublock'}> */}
            {/* {this.state.menuopen ? <Menubar closePopup={this.onMenuopen.bind(this)} /> : null} */}
            <section className={"menublock " +slideClass}>
            <Menubar onClick={this.onMenuopen.bind(this)} />
                <aside className="menuIcon" onClick={this.onMenuopen.bind(this)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </aside>
            </section>
            <figure className="maglogo">
                <Link to="/" ><img src={maglogo} alt="Magzter" title="Magzter" /></Link>
            </figure>
            <figure className="serchIcon">
                <Link to="/"><img src={searchlogo} alt="Search" title="Search" /></Link>
            </figure>
        </section>
    </header>
    )
  }
}

export default header