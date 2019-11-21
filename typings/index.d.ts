/// <reference types="react" />
/// <reference types="react-dom" />


declare module '*.jsx' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<JSXELEMENT>;
  
    const src: string;
    export default src;
  }

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
