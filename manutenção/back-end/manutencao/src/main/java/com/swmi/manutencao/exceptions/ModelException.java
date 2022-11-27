package com.swmi.manutencao.exceptions;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ModelException {
  private LocalDateTime dataHora;
  private String mensagem;


}


