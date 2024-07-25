package org.example.methods;
// memory is created by java
// Who does memory management ? --> JVM
   /*
   Memory 2 -> stack ,heap
   STACK -->
   stack -->stores temp variables & sep. memory for methods
   stores primitive data types
   stores reference to heap objects (Strong, weak, soft)

thread -->  own stack memory
variables within the Scope is visible only within that particular scope as soon as it goes out of scope it gets
 deleted

 When stack memory get full --> stackoverflow

 HEAP---> stores object , no order is present
 Garbage collector--> used to delete unreferenced object from heap
 types--> single gc, parellel gc,cms (concurrent mark nad sweep )-->mark ans sweep algo
 heap memory is shared across all  the threads


typesof refeeence -->
 strong --> stack var is referencing an obj in heap ; jb tk reference rahega it wont be deleted
 weak--> WeakReference <Person> weakPObj =new WeakRference  <Person> (new Person);
 soft --> shortage of space ;
    */

import org.example.Person;
//
public class Memory {
//    int primitivevariable = 10;//primitve data type
//    Person p = new Person();// object
//    String stringliteral="Hello";//string literqal
//    Memory memObj=new Memory();
//    memObj.memoryManagementTest(p);
//    private void memoryManagementTest(Person  p){
//        Person p2=p; //reference to object
//        String stringliteral2="Hello"; //strig literal
//        String stringliteral3=new String("Hello");// string object

//Person obj1=new Person();
//    Person obj2=new Person();
//    obj1=obj2; // obj1 will be deleted first
    }
