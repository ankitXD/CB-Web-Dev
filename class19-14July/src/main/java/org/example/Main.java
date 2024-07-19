package org.example;

import java.security.Principal;

// public class Main {
//     public static void main(String[] args) {
       // System.out.println("Hello world!");

//        Sub_Super.NestedClass obj=new Sub_Super.NestedClass();
//        obj.print();

        // inner class or non static nested class
//        Sub_Super  obj=new Sub_Super();
//        Sub_Super.NestedClass obj1= obj.new NestedClass();
//        obj1.print();
//        inherit_class_eg obj=new inherit_class_eg();
//        inherit_class_eg.Innerclass1.innerclass2  obj1=inherit_class_eg.new innclass2();
//        obj1.display();
//    }

//        Car audioObj=new Car() {
//            @Override
//            public void pressBreak() {
//                System.out.println("HIiiii");
//            }
//        };// inside the obj declaration --> an inner class without  any name--> anoymous class
//        audioObj.pressBreak(); // as obj of abstract is not created sp we had to do it this way

//        generic_clas<Integer> obj=new generic_clas();
//        obj.setPrintValue(1);
//        Integer printvalue=obj.getPrintValue();
//       if(printvalue==1){
//           System.gc();
//       }
//       ColorPrint obj1=new ColorPrint();
//       obj1.setPrintValue("2");

//        muti_gen_clas<String,Integer> obj=new muti_gen_clas<>();
//        obj.put("hello",12);

//raw type val
//         raw_type_obj<String>  p=new raw_type_obj<>();
//         raw_type_obj  p1=new raw_type_obj<>();// object as paramter -->type
//         p1.setPrintValue(1);
//         p1.setPrintValue("hello");

// }
/*
        nested classes -> class within another class
scope-> outer class
2 type--> static nested
        non static

static -> doesnot have access to non static instance variables and methods

local inner class -->classes defined inside a block
        */
//public class Sub_Super { // outer class
//    int instanceVar=10;
//    static int classvar=20;
//    static class NestedClass{
//        void print(){
           //System.out.println("instancevar",instancevariable);// err
//            System.out.println("classvar"+ classvar);
           // if there a static class (inner) it can only access to static vars and methods
//        }
//    }
//}

//public class Sub_Super { // outer class
//    int instanceVar=10;
//    static int classvar=20;
//     class NestedClass{
//        void print(){
           //System.out.println("instancevar",instancevariable);// err
//            System.out.println("classvar"+ classvar);
           // if there a static class (inner) it can only access to static vars and methods
//        }
//    }
//}