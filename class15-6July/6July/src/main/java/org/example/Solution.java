package org.example;

public class Solution{
    public static void main(String[] args){
        short x = 10;
       // x =  x * 5;
        System.out.print(x);
    }
}

//package org.example;
//
//public class Main {
//    int a2; instance varible
//
//    public static void main(String[] args) {
//
//        System.out.println("Hello world!");
//         variable-> container-> value
//         datatype variable name
//        System.out.println(x);
//java is statically  typed lang
//          strongly typed -->
//         primitive -> char(2byes 16 bit),byte(1byte 8 bit) ,short(,int,long,float, double,boolean
//         non p--> class , interafce, array ,string,enum
//         char 2 byte  16 bit , default -> NULL
//         byte 1 byte 8 bit , default -> 0
//         short 2 bytes , 0
//         int 4bytes , -> 0
//        long ->8 bytes  , 0
//        boolean -> 1 byte ,  True
//        int  x=1;
//        boolean a=true;
//        boolean b;
//        int a1;
//        System.out.println(b);
//        System.out.println(a1);
//        System.out.println(instance.a2);
//
//    }
//}
// public class--> only  1 -> java file
// kinds of varibles ->
//1  instance /member var--> its a variable of the class ->
//2 local -> function associated var, deleted once function is completed; main, block ,constructor
//3 static-> 1 copy

//package org.example;
//
//public class Main {
//
//    public static void main(String[] args) {
//
//    }
//}

//public class Solution{
//    public static void main(String[] args){
//        short x = 10;
//        x =  x * 5;
//        System.out.print(x);
//    }
//}
//char ->2bytes->0 to 65535
// byte -> -128 to 127
//short  -> -32767 to 32767

// typecasting --> automatic--> byte->short-> int->long eg int var=10; long nvar=var;
// downcasting  -> int x=10; byte a=x;
//byte a =1 byte b =127  bytesum=a+b


// int ,byte ,short , long  --> cyclic in nature
//public class Solution{
//    public static void main(String[] args){
//        byte x = 127;
//        x++;
//        x++;
//        System.out.print(x); //-127
//    }
//}

//byte:
//        8-bit signed integer
//        Range: -128 to 127
//        Cyclic: Yes, when the value exceeds 127, it wraps around to -128, and vice versa.
//        short:
//
//        16-bit signed integer
//        Range: -32,768 to 32,767
//        Cyclic: Yes, when the value exceeds 32,767, it wraps around to -32,768, and vice versa.
//        int:
//
//        32-bit signed integer
//        Range: -2,147,483,648 to 2,147,483,647
//        Cyclic: Yes, when the value exceeds 2,147,483,647, it wraps around to -2,147,483,648, and vice versa.
//        long:
//
//        64-bit signed integer
//        Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
//
//       Cyclic: Yes, when the value exceeds 9,223,372,036,854,775,807, it wraps around to -9,223,372,036,854,775,808, and vice versa.

//if x=3[4), y=5, and z=10(11):
//
// ++z + y - y + z + x++
// 11 + 5 -5  +11 + 3