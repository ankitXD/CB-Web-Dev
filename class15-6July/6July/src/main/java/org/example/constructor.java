package org.example;
// used to initialize instance vars , samename as of class ; no return type ; final,static
public class constructor {

    String name;int empid;
    constructor(){
        this(10);
    }
    constructor(int empid){
        this("abc",empid);
    }
    constructor(String name,int empid){
        this.name=name;
        this.empid=empid;
    }

}
