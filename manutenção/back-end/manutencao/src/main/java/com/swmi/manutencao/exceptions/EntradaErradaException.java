package com.swmi.manutencao.exceptions;

public class EntradaErradaException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public EntradaErradaException(){
        super(String.format("Formato da Requisição Incorreto"));


    }
}
