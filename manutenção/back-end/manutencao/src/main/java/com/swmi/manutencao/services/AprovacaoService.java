package com.swmi.manutencao.services;


import com.swmi.manutencao.domain.Aprovacao;

import com.swmi.manutencao.domain.Colaborador;
import com.swmi.manutencao.exceptions.*;
import com.swmi.manutencao.repository.AprovacaoRepository;
import com.swmi.manutencao.repository.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AprovacaoService {

  @Autowired
  private AprovacaoRepository aprovacaoRepository;

  public List<Aprovacao> listar(){
    return aprovacaoRepository.findAll();
  }

  public List<Aprovacao> listarStatus(String status){
    List<Aprovacao> lista = aprovacaoRepository.findByStatus(status);
    if(lista.isEmpty()){
      throw new NaoEncontradoException("Aprovação no Status", status);
    }
    return lista;
  }

  public List<Aprovacao> listarRequisitante(String registro){
    List<Aprovacao> lista = aprovacaoRepository.findByRequisitante(registro);
    if(lista.isEmpty()){
      throw new NaoEncontradoException("Requisições do", registro);
    }
    return lista;
  }

  public Aprovacao buscarId(Long id){
    String idString = String.valueOf(id);
    return aprovacaoRepository.findById(id)
      .orElseThrow(() -> new NaoEncontradoException("Pendencia", idString));
  }


  public Aprovacao salvar(Aprovacao aprovacao){
    try {
      return aprovacaoRepository.save(aprovacao);
    }catch (DataIntegrityViolationException e){
      String aprovasaoString = String.valueOf(aprovacao.getId());
      throw new CadastroExistenteException("Aprovacao", aprovasaoString);
    }catch (RuntimeException e){
      throw new EntradaErradaException();
    }
  }

  public Aprovacao buscarItem(String item){
    return aprovacaoRepository.findByItemRequisicao(item)
      .orElseThrow(() -> new NaoEncontradoException("Aprovação para o Item", item));
  }

  public Aprovacao gerarPendencia(Aprovacao aprovacao, String status){
    verificarPendencia(aprovacao);
    if(status.equals("ATIVO")){
      Aprovacao pendenciaDesativar = aprovacao;
      pendenciaDesativar.setDescricao("DESATIVAR COLABORADOR");
      pendenciaDesativar.setNivelNecessario("SUPERVISOR");
      pendenciaDesativar.setStatus("PENDENTE");
      return salvar(pendenciaDesativar);
    }else{
      Aprovacao pendenciaAtivar = aprovacao;
      pendenciaAtivar.setDescricao("ATIVAR COLABORADOR");
      pendenciaAtivar.setNivelNecessario("SUPERVISOR");
      pendenciaAtivar.setStatus("PENDENTE");
      return salvar(pendenciaAtivar);
    }
  }

  public void verificarPendencia(Aprovacao aprovacao){
    Aprovacao buscaItem = aprovacaoRepository
      .findByItemRequisicaoAndStatus(aprovacao.getItemRequisicao(), "PENDENTE");
    if(Objects.nonNull(buscaItem)){
      throw new PendenciaAtivaException("Colaborador", aprovacao.getItemRequisicao());
    }
  }
}
