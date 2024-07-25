package org.example.class_types;
// data abstraction -> one of the OOPS pillar ->
// 2 ways to achieve -> abstract class -> abstarct(keyword) ,  no instance created, constructor rpresent ,super
public  abstract  class abstractClass {

    int mileage;
    abstractClass(){
        this.mileage=mileage;
    }
    public abstract  void pressBreak();

    public int getNoofwheels(){
        return 4;
    }
}
