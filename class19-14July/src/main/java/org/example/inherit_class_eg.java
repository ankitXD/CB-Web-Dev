package org.example;

public class inherit_class_eg { int instvar=1;
    static int classvar=2;
    class Innerclass1{
        int invar1=3;
    }class innclass2 extends Innerclass1{
        int inclas2=4;
        void display(){
            System.out.println(inclas2+instvar+invar1+inclas2);
        }
    }
}
