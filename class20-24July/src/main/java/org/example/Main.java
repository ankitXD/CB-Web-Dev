package org.example;

<<<<<<< HEAD
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



=======
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
//java.lang.reflect->classes that can  modify access data like fields methods and constrcutor
public class Main {
    public static void main(String[] args) throws NoSuchFieldException,IllegalAccessException{
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
//        raw_type_obj<String>  p=new raw_type_obj<>();
//        raw_type_obj  p1=new raw_type_obj<>();// object as paramter -->type
//        p1.setPrintValue(1);
//        p1.setPrintValue("hello");

//        funct_interface eagleobj=new funct_interface() {
//            @Override
//            public void canFly(String value) {
//
//            }
//        }

//        Class Bird2=Bird2.class;
//        System.out.println(Bird2.getName());
//        System.out.println(Modifier.toString(Bird2.getModifiers()));
//
//        Method[] methods=Bird2.getMethods();
//        for(Method method:methods){
//            System.out.println(method.getName());
//            System.out.println(method.getReturnType());
//            System.out.println(method.getDeclaringClass());
//            System.out.println(method.getDeclaredAnnotations());
//        }

//        Class Bird2=Bird2.class;
//        Field[] fields=Bird2.getFields();
//        for(Field field:fields){
//            System.out.println(field.getName());
//            System.out.println(field.getType());
//            System.out.println(field.getDeclaringClass());
//            System.out.println(field.getDeclaredAnnotations());
//        }
//
        Class Bird2=Bird2.class;
        Bird2 obj=new Bird2();
//        Field field= Bird2.getDeclaredField("breed");
//        field.set(obj,"HBreed");

        Field field= Bird2.getDeclaredField("canSwim");
       // field.set(obj,true);//-->err -->beacuse of private
        //crrct way
        field.setAccessible(true);
        field.set(obj,true);
        if(field.getBoolean(obj)){
            System.out.println("value is true");
        }

//**** -->methods available --> get only not set


}
/*
        nested classes -> class within another class
// scope-> outer class
2 type--> static nested
        non static

static -> doesnot have access to non static instance variables and methods

//local inner class -->classes defined inside a block
        */
//public class Sub_Super { // outer class
//    int instanceVar=10;
//    static int classvar=20;
//    static class NestedClass{
//        void print(){
//            //System.out.println("instancevar",instancevariable);// err
//            System.out.println("classvar"+ classvar);
//            // if there a static class (inner) it can only access to static vars and methods
//        }
//    }
//}

//public class Sub_Super { // outer class
//    int instanceVar=10;
//    static int classvar=20;
//     class NestedClass{
//        void print(){
//            //System.out.println("instancevar",instancevariable);// err
//            System.out.println("classvar"+ classvar);
//            // if there a static class (inner) it can only access to static vars and methods
//        }
//    }
//}
>>>>>>> 1e1e3de (added codefor 20 july)
