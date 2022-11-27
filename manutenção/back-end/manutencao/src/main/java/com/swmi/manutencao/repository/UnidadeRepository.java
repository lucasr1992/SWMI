package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.UnidadeNegocio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UnidadeRepository extends JpaRepository<UnidadeNegocio, Long> {

  List<UnidadeNegocio> findByStatus(String status);
  Optional<UnidadeNegocio> findByBusiness(String business);
}
