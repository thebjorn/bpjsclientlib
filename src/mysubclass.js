
// const bpjslib = require('bpjslib');
import {MyClass} from 'bpjslib/src';


export class MySubClass extends MyClass {
    constructor(...args) {
        super({
            myval: 1
        }, ...args);
    }
}
