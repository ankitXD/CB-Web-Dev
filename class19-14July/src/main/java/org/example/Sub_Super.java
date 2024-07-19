package org.example;

public class Sub_Super {

    int insvar=10;
    static int classvar=20;

    public void display(){
        class Localclass{
            int methodinnervar=12;
            public void print(){
                System.out.println(methodinnervar+ classvar+ insvar);
            }
        }

        Localclass obj=new Localclass();
        obj.print();//  it  can be only invoke inside that code
    }
}