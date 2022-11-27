package com.swmi.manutencao.exceptions;

public class EmUsoException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public EmUsoException(String entity, String item){
        super(String.format("%s %s Esta em Uso, Não é Possivel esta Ação", entity, item));
    }
}
