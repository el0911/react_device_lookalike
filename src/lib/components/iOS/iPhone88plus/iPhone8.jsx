import React from 'react';
import devicelook from "./iPhone8.module.css";


export default function IPhone8() {
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
