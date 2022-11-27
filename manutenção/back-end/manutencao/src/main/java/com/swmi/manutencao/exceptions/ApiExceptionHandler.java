package com.swmi.manutencao.exceptions;

import org.springframework.beans.factory.parsing.Problem;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {


  @ExceptionHandler(CadastroExistenteException.class)
  public ResponseEntity<?> tratarEntidadeExistente(CadastroExistenteException e) {
    String menssage = e.getMessage();
    ModelException bodyException = ModelException.builder()
      .dataHora(LocalDateTime.now())
      .mensagem(menssage)
      .build();
    return ResponseEntity.status(HttpStatus.CONFLICT)
      .body(bodyException);
  }

  @ExceptionHandler(NaoEncontradoException.class)
  public ResponseEntity<?> tratarEntidadeNaoEncontrado(NaoEncontradoException e){
    String menssage = e.getMessage();
    ModelException bodyException = ModelException.builder()
      .dataHora(LocalDateTime.now())
      .mensagem(menssage)
      .build();
    return ResponseEntity.status(HttpStatus.CONFLICT)
      .body(bodyException);
  }

  @ExceptionHandler(EmUsoException.class)
  public ResponseEntity<?> tratarEntidadeEmUso(EmUsoException e){
    String menssage = e.getMessage();
    ModelException bodyException = ModelException.builder()
      .dataHora(LocalDateTime.now())
      .mensagem(menssage)
      .build();
    return ResponseEntity.status(HttpStatus.CONFLICT)
      .body(bodyException);
  }

  @ExceptionHandler(EntradaErradaException.class)
  public ResponseEntity<?> tratarEntradaErrada(EntradaErradaException e){
    String menssage = e.getMessage();
    ModelException bodyException = ModelException.builder()
      .dataHora(LocalDateTime.now())
      .mensagem(menssage)
      .build();
    return ResponseEntity.status(HttpStatus.CONFLICT)
      .body(bodyException);
  }

  @ExceptionHandler(PermissaoException.class)
  public ResponseEntity<?> tratarErroPermissao(PermissaoException e){
    String menssage = e.getMessage();
    ModelException bodyException = ModelException.builder()
      .dataHora(LocalDateTime.now())
      .mensagem(menssage)
      .build();
    return ResponseEntity.status(HttpStatus.FORBIDDEN)
      .body(bodyException);
  }

  @ExceptionHandler(PendenciaAtivaException.class)
  public ResponseEntity<?> tratarErroPendenciaDuplicada(PendenciaAtivaException e){
    String menssage = e.getMessage();
    ModelException bodyException = ModelException.builder()
      .dataHora(LocalDateTime.now())
      .mensagem(menssage)
      .build();
    return ResponseEntity.status(HttpStatus.FORBIDDEN)
      .body(bodyException);
  }







}


