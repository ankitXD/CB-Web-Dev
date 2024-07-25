package org.example;

@FunctionalInterface
public interface LivingThing {
//    default public Boolean canBreathe(){ // in this if we dont use  deafult  it will be an err
//        return true;
//    }

   // use case 2
   public  Boolean canBreathe();
}
// interface extending functional interface then no issue