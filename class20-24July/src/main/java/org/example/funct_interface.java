package org.example;
// functional interface -> its a interface that  contains only 1 abstract method
// annotation/keyword  @FunctionalInterface

@FunctionalInterface
public interface funct_interface  {
    void canFly(String value);
  // void getHeight();//-> will throw err

    // we have only 1 abstarct method but we  can have other methods like default static methods inherited
//    String tostring();
    static void canEat(){

    }
    default void getH(){

    }

}
// lamba expression-> expressions which are a way to implement  functional interface

// types-- > consumer --> represents an operation that accepts a single input parameter and returns results
//supplier-> accepts no input param but gives results
// function -> accepts one arg and process it  and then gives result
// predicate -> same as above  but return boolean

// use case -> 1 function interface --> non functional interafce


