import React from "react";
import { NavLink } from "react-router-dom";
import "./app.css";
class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            menuDis: "none",
            menuStyle: "",
            trsf: 'translateY(-100%)',
            opac:"0"
        }
    }
    toggleMenu = () => { 
        const winWindth = window.innerWidth;
        let dis = this.state.menuDis;
        console.log(this.state.menuDis)
        if (dis == "none" && winWindth <=727) {
            this.setState({
            menuDis: "block",
            menuStyle: "draw-up",
            trsf: 'translateY(0)',
            opac:'0.4',
            })
        } else {
            this.setState({
                menuDis: "none",
                menuStyle: '',
                trsf: 'translateY(-100%)',
                opac:'0',
            })
        }
        console.log(this.state.menuDis)
    }
    componentDidMount(){ 
    }
    render() {
        return (
            <div>
              <header>
                <div className="ib logo"><img src={require("./images/logo.png")} /></div>
                    <a className={`navbar ${this.state. menuStyle}`} onClick={this.toggleMenu} href="javascript:void(0);"><div className="navbar-icons"><span></span><span></span><span></span></div></a>
                    <div id="navbar-drawer-mask" onClick={this.toggleMenu} style={{ "display": this.state.menuDis, 'opacity': this.state.opac }}></div>
                    <ul className="ib nav" id="nav-drawer-list" style={{"transform":this.state.trsf}}>
                    <li> <NavLink className="s-font-body" onClick={this.toggleMenu}  exact to="/" >首页</NavLink></li>
                    <li> <NavLink className="s-font-body"  onClick={this.toggleMenu} to="/guanyu" >关于图特</NavLink></li>
                    <li> <NavLink className="s-font-body" onClick={this.toggleMenu}  to="/fuwu" >服务内容</NavLink></li>
                    <li> <NavLink className="s-font-body" onClick={this.toggleMenu}  to="/item" >项目案列</NavLink></li>
                    <li> <NavLink className="s-font-body" onClick={this.toggleMenu}  to="/shanwu" >商务合作</NavLink></li>
                    <li> <NavLink className="s-font-body" onClick={this.toggleMenu}  to="/chenpin" >诚聘英才</NavLink></li>
                </ul>
              </header>
                <article className="con">{this.props.children}</article>
                <div className="navigation-buttons strikingly-fixed" style={{ "bottom": "20px"}}><span className="prev"></span><span className="next"></span></div>
                <footer className="foot">
                    <p>------------- StarArt© Copyright 2017 闽ICP备16028398号-------------</p>
                    <p>&nbsp;</p>
                    <p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302032623" target="_blank"><u>闽公网安备 35020302032623号</u></a></p>
                </footer>
            </div>
        )
    }
}
export default App;
