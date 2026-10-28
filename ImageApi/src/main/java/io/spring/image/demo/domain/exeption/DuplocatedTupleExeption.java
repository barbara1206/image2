package io.spring.image.demo.domain.exeption;

public class DuplocatedTupleExeption extends RuntimeException{
    public DuplocatedTupleExeption(String message) {
        super(message);
    }
}
