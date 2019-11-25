import React from 'react';
 import { BrowserRouter, Route} from "react-router-dom";

import Home from "./lib/components/homepage/Home.jsx"
import Samsungs105G from "./lib/components/Android/Samsungs105G/Samsungs105G.jsx";
import Samsungs10 from "./lib/components/Android/Samsungs10/Samsungs10.jsx";
import Samsungs10e from "./lib/components/Android/Samsungs10e/Samsungs10e.jsx";
import Samsungs10plus from "./lib/components/Android/Samsungs10plus/Samsungs10plus.jsx";
import IPhone11 from "./lib/components/iOS/iPhone11/IPhone11.jsx";
import IPhone66s7 from "./lib/components/iOS/iPhone66s7/IPhone66s7";
import  IPhone11ProMax  from './lib/components/iOS/iPhone11/IPhone11ProMax';
import  IPhone11Pro  from './lib/components/iOS/iPhone11/IPhone11Pro';
import IPhoneX from "./lib/components/iOS/iPhonex/IPhoneX.jsx"
 import IPhoneXR from "./lib/components/iOS/iPhonex/IPhoneXR.jsx"
 import IPhoneXSMax from "./lib/components/iOS/iPhonex/IPhoneXSMax.jsx"
import  IPhone8  from './lib/components/iOS/iPhone88plus/iPhone8';




export default function Customroutes () {
    return(
        <div>
            <BrowserRouter>
        <Route path="/home" component={Home} />
    <Route path="/samsungs105G" component={Samsungs105G} />
    <Route path="/samsungs10" component={Samsungs10} />
    <Route path="/samsungs10e" component={Samsungs10e} />
    <Route path="/samsungs10plus" component={Samsungs10plus} />
    <Route path="/iPhone11" component={IPhone11}/>
    <Route path="/iPhone11Pro" component={IPhone11Pro}/>
    <Route path="/IPhone11ProMax" component={IPhone11ProMax}/>
    <Route path="/iPhone66s7" component={IPhone66s7}/>
    <Route path="/iPhone66s7" component={IPhone66s7}/>
    <Route path="/iPhone8" component={IPhone8}/>
    <Route path="/iPhonex" component={IPhoneX}/>
    <Route path="/iPhonexr" component={IPhoneXR}/>
    <Route path="/iPhonexsmax" component={IPhoneXSMax}/>

       </BrowserRouter>
    </div>
 
    )
}
    
