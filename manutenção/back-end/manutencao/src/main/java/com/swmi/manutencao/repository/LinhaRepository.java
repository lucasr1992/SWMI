package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Linha;
import com.swmi.manutencao.domain.Planta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LinhaRepository extends JpaRepository<Linha, Long> {
    List<Linha> findByStatus(String status);
    Optional<Linha> findByLinha(String planta);
}
