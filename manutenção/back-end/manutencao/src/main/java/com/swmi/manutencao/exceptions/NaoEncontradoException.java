package com.swmi.manutencao.exceptions;

public class NaoEncontradoException extends RuntimeException{
  private static final long serialVersionUID = 1L;

  public NaoEncontradoException(String entity, String item){
    super(String.format("Não Encontrado o(a) %s - %s", entity, item));
  }
}
