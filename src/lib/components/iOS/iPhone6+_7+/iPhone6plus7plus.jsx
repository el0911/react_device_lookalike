import React from 'react'
import devicelook from "./iPhone6plus7plus.module.css";

export default function IPhone6plus7plus() {
    return (
        <div className={devicelook.container}>
          <div className={devicelook.smartphone}>
             <p className={devicelook.dot}> </p>
             <p className={devicelook.dot2}> </p>
             <p className={devicelook.dot1}> </p>
             <p className={devicelook.dotbottom}> </p>
             <p className={devicelook.bottomellipse}> </p>
          </div>

        </div>
    )
}

