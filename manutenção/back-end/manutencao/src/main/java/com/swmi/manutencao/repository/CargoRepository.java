package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Cargo;
import com.swmi.manutencao.domain.UnidadeNegocio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CargoRepository extends JpaRepository<Cargo, Long> {
    Optional<Cargo> findByCargo(String cargo);

    List<Cargo> findByStatus(String status);
}
