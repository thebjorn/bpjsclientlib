
// const bpjslib = require('bpjslib');
// import * as bpjslib from 'bpjslib';
import bpjslib from 'bpjslib';


// export class MySubClass extends bpjslib.MyClass {
//     constructor(...args) {
//         super({
//             myval: 1
//         }, ...args);
//     }
// }


export class MySubClass {
    constructor(...args) {
        console.log("MYCLASS:", bpjslib);
        console.log("MYCLASS:", bpjslib.MyClass);
        const myclass = new bpjslib.MyClass();
        this.myval = myclass.myval - 41;
    }
}
