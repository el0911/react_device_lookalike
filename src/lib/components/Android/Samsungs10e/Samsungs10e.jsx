import React from 'react';
import devicelook from "./Samsungs10e.module.css";

export default function Samsungs10e() {
    return (
        <div className={devicelook.container}>
          <div className={devicelook.smartphone}>
          <p className={devicelook.blackspacetop}></p>
             <div className={devicelook.camera}>
                 
             <p className={devicelook.dot}> </p>

             </div>
             <p className={devicelook.blackspacebottom}></p>
          </div>

        </div>
    )
}

