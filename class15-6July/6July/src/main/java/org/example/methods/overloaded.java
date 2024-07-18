package org.example.methods;

//method overlaoding
public class overloaded {
    void getInvoice(){
        System.out.println("Hi");
        return;
    }
    void getInvoice(String z){

    }
    int getInvoice(int a ){

    }
    public void printInvoice(){
        getInvoice();
    }
}
