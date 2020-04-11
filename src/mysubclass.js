
import bpjslib from 'bpjslib';


export class MySubClass extends bpjslib.MyClass {
    constructor(...args) {
        super({
            myval: 1
        }, ...args);
    }
}
