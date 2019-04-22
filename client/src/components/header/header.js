import React, { Component } from 'react';
import maglogo from  "../../images/magLogo.png";
import searchlogo from  "../../images/searchicon.png";
import Menubar from "../../components/header/menubar"
import Searchpop from "../../components/common/searchpop"
import { Link } from "react-router-dom";
class header extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuopen:false,
            searchOpen:false,
        }
    }
    onMenuopen(){
        this.setState({
            menuopen:!this.state.menuopen
        })
    }
    onSearchopen(){
        this.setState({
            searchOpen:!this.state.searchOpen
        })
    }
    render() {
        let menuSlideClass, searchOpenClass;
        this.state.menuopen ? menuSlideClass="open" : menuSlideClass=""
        this.state.searchOpen ? searchOpenClass="searchopn" : searchOpenClass=""
    return (
        //  onClick={this.onClassAdd.bind(this)} className={newclass.join(' ')}
        <header className={menuSlideClass + ' ' + searchOpenClass}>
            <Menubar  onClick={this.onMenuopen.bind(this)} />
            <Searchpop onClick={this.onSearchopen.bind(this)} />
        <section className="container">
            {/* <section   className={this.state.menuopen ? 'menublock menuopen' : 'menublock'}> */}
            {/* {this.state.menuopen ? <Menubar closePopup={this.onMenuopen.bind(this)} /> : null} */}
            <section className='menublock'>
            
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
                <Link to="/" onClick={this.onSearchopen.bind(this)}><img src={searchlogo} alt="Search" title="Search" /></Link>
            </figure>
        </section>
    </header>
    )
  }
}

export default header