package org.example;

// java <-> reflection->  examine class, methods ,fields, interface -> at runtime -->
// they can change the behaviour of class too
//eg -> what class are present, fields, return type ,modifier, interfaces, public-> priavte etc
// class -> examine --> object
//class Class ->this type of instance is madeduring runt ime
// JVM creates one class interface --> JVM --> loading class happens
//class obj--> meta data info
public class Bird1 {

    // getting this class object --> 3ways
    //1
   // Class birdclass=Class.forName("Bird1");
    //2 using .class
    //Class birdclass=Bird1.class;
    //3
    Bird1 bird1obj=new Bird1();
    Class birdclass=bird1obj.getClass();


}
