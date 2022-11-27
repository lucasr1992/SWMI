package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Linha;
import com.swmi.manutencao.domain.Tecnologia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TecnologiaRepository extends JpaRepository<Tecnologia, Long> {
    List<Tecnologia> findByStatus(String status);
    Optional<Tecnologia> findByTecnologia(String tecnologia);
}
