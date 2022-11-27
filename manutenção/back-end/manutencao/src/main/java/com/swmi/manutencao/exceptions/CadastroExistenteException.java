package com.swmi.manutencao.exceptions;

public class CadastroExistenteException extends RuntimeException{
  private static final long serialVersionUID = 1L;

  public CadastroExistenteException(String entity, String item){
    super(String.format("%s %s Existente", entity, item) );
  }

}
