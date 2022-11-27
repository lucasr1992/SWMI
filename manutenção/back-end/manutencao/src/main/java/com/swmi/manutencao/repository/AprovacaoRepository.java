package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Aprovacao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface AprovacaoRepository extends JpaRepository<Aprovacao, Long> {

  List<Aprovacao> findByStatus(String status);
  List<Aprovacao> findByRequisitante(String requisitante);

  Optional<Aprovacao> findByItemRequisicao(String item);

  Optional<Aprovacao> findById(Long id);

  Aprovacao findByItemRequisicaoAndStatus(String item, String status);
}
