import React from "react";
import home from "../homepage/home.module.css"


export default function Home() {
  return (
    <div className={home.body}>
      <div className={home.content}>
        
      <h3 className={home.title}>React-Mobiledevices-Lookalike</h3>
            <p className={home.para}>
                Easy to use React MobileDevices Lookalike components.
              </p>
              <p>
                <button className={home.button} color="danger" href="https://github.com/IkkyOdufade/react_device_lookalike">GitHub</button>
                <button className={home.button1} color="danger" to="/components/">Components</button>
              </p>
          
      </div>
    </div>
  );
}
