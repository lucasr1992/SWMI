package com.swmi.manutencao.exceptions;

public class PendenciaAtivaException extends RuntimeException {
  private static final long serialVersionUID = 1L;

  public PendenciaAtivaException(String entity, String item){
    super(String.format("%s %s ja Possui uma Pendencia, não é Possivel Aplicar esta Ação", entity, item));
  }
}
