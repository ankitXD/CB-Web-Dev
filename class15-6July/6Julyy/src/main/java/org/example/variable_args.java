package org.example;

public class variable_args {
    static int carPrice=100;
    public int sum(int a,int ...variable){
        int op=0;
        for(int var:variable){
            op+=var;
        }
        return op;
    }
    // variable_args a=new variable_args();
    // a.sum(2,1,2,3)
}
