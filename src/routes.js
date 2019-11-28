import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./lib/components/homepage/Home.jsx";
import Samsungs105G from "./lib/components/Android/Samsungs105G/Samsungs105G.jsx";
import Samsungs10 from "./lib/components/Android/Samsungs10/Samsungs10.jsx";
import Samsungs10e from "./lib/components/Android/Samsungs10e/Samsungs10e.jsx";
import Samsungs10plus from "./lib/components/Android/Samsungs10plus/Samsungs10plus.jsx";

import IPhone66s7 from "./lib/components/ios/iPhone66s7/IPhone66s7";
import IPhone6plus7plus from "./lib/components/ios/iPhone6+_7+/iPhone6plus7plus";
import IPhone8 from "./lib/components/ios/iPhone88plus/iPhone8";
import IPhoneX from "./lib/components/ios/iPhonex/IPhoneX";
import IPhoneXR from "./lib/components/ios/iPhonex/IPhoneXR";
import IPhoneXSMax from "./lib/components/ios/iPhonex/IPhoneXSMax";
import IPhone11 from "./lib/components/ios/iPhone11/IPhone11.jsx";
import IPhone11ProMax from "./lib/components/ios/iPhone11/IPhone11ProMax";
import IPhone11Pro from "./lib/components/ios/iPhone11/IPhone11Pro";

export default function Customroutes() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/Home" component={Home} />
        <Route path="/Samsungs105G" component={Samsungs105G} />
        <Route path="/Samsungs10" component={Samsungs10} />
        <Route path="/Samsungs10e" component={Samsungs10e} />
        <Route path="/Samsungs10plus" component={Samsungs10plus} />
        <Route path="/IPhone11" component={IPhone11} />
        <Route path="/IPhone11Pro" component={IPhone11Pro} />
        <Route path="/IPhone11ProMax" component={IPhone11ProMax} />
        <Route path="/IPhone66s7" component={IPhone66s7} />
        <Route path="/IPhone6plus7plus" component={IPhone6plus7plus} />
        <Route path="/IPhone8" component={IPhone8} />
        <Route path="/IPhonex" component={IPhoneX} />
        <Route path="/IPhonexr" component={IPhoneXR} />
        <Route path="/IPhonexsmax" component={IPhoneXSMax} />
      </BrowserRouter>
    </div>
  );
}
