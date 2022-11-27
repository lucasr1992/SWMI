package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.TipoEquipamento;
import com.swmi.manutencao.domain.UO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TipoEquipamentoRepository extends JpaRepository<TipoEquipamento, Long> {
    List<TipoEquipamento> findByStatus(String status);
    Optional<TipoEquipamento> findByTipoequipamento(String tipo);
}
