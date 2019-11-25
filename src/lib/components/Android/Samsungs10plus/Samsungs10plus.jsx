import React from 'react';
import devicelook from "./Samsungs10plus.module.css";

export default function Samsungs10plus() {
    return (
        <div className={devicelook.container}>
          <div className={devicelook.smartphone}>
          <p className={devicelook.blackspacetop}></p>
             <div className={devicelook.camera}> 
             <p className={devicelook.dot}> </p>
             <p className={devicelook.dot1}> </p>
             </div>
             <p className={devicelook.blackspacebottom}></p>
          </div>

        </div>
    )
}
