import React from "react";
import ReactDom from "react-dom";
import { HashRouter,Router, Route, Link } from "react-router-dom";
import App from "./app";
import Inde  from "./contain/index/index";
import GuanYu from "./contain/guanyu/guanyu";
import Fuwu from "./contain/fuwu/fuwu";
import Item from "./contain/item/item";
import ShanWu from "./contain/shanwu/shanwu";
import ChenPin from "./contain/chenpin/chenpin";
ReactDom.render(
    
    (
        <HashRouter>
            <App>
                <Route exact path="/" component={Inde}/>
                <Route exact path="/guanyu" component={GuanYu}/>
                <Route exact path="/fuwu" component={Fuwu}/>
                <Route exact path="/item" component={Item}/>
                <Route exact path="/shanwu" component={ShanWu}/>
                <Route exact path="/chenpin" component={ChenPin}/>
            </App>
        </HashRouter>
       ),
         document.getElementById("app")
    )