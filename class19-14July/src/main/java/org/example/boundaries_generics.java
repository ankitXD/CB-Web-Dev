package org.example;
// restrcition --> what all objects wecan pass at this type ofaprameters
public class boundaries_generics<T extends Number> {
        T value;
    public T getPrintValue(){
        return value;
    }
    // public T setPrintValue(T value){
    //     this.value=value;
    // }

}
