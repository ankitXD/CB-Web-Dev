package org.example;

public class Student {

    public static void main(String args[]){
//        Employee empObj=new Employee();  // new keyword --> allocates a memory block reference to actual memory

        // Emp object variable --->holds reference --->actual object (heap)
        //in java everything is call by value

        Person sde=new Engineer();
        Person teacher=new Teacher();
        Teacher teacher1=new Teacher();
        Engineer sde1=new Engineer();
        // sde , teacher ---> hold reference -->engineer& teacher(heap)
        //we can store the objects of a child in a parent or we can store the objects ofthe same class in the same
        // class itself but we cannot create object of interface
//        Person person=new Person() {
//            @Override
//            public String Profession() {
//                return null;
//            }
//        }-->this is wrong
    }
}
