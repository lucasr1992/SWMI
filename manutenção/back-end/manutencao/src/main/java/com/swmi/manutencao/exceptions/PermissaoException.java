package com.swmi.manutencao.exceptions;

public class PermissaoException extends RuntimeException{
  private static final long serialVersionUID = 1L;

  public PermissaoException(String entity, String item){
    super(String.format("Você não tem Permissão Apenas Nivel %s %s", entity, item) );
  }
}
