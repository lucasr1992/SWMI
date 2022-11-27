package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.UO;
import com.swmi.manutencao.domain.UnidadeNegocio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UoRepository  extends JpaRepository<UO, Long> {
    List<UO> findByStatus(String status);
    Optional<UO> findByUo(String uo);
}
