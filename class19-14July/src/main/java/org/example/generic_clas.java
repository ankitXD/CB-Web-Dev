package org.example;
// generic class helpsus to avoid typecasting
public class generic_clas<T> {

//    Object value;
//    public Object getPrintValue(){
//        return value;
//    }
//    public Object setPrintValue(Object value){
//        this.value=value;
//    }
    T value;// ->any non primituve type
  public T getPrintValue(){
       return value;
   }
  public T setPrintValue(T value){
       this.value=value;
    }

}

