package org.example;

public class Main {
    public static void main(String[] args) {

        variable_args v=new variable_args();
        v.sum(1,123,123,77);
        //reference data types->
        // 4 main --> class ,string,interface ,array
// String-->immutable ,   String literals,heap ->fixed memeory --> variable will have its reference
//        String s1="hello";
//        String s2="hello";
//        // s1 ------>   | hello |
//        // s2-------->    Heap
//        String s3=new String("hello");

        // interface ->

        //array ->

        int[] a=new int[5];// (heap)

     // wrapper class -> // autoboxing // unboxing
     // for each prmitive type there is  a wrapper class
     // int -->Integer , char  -> Character

//autoboxing
        int a1=10;
        Integer x=a1;
        //unboxing
        Integer x1=10;
        int x2=x1;
        // constant var
//        static final a3=10;

    }
}



