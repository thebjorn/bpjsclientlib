import { MySubClass } from "../mysubclass"


test('test-myclass', () => {
    const myclass = new MySubClass();
    expect(myclass.myval).toBe(1);
});
