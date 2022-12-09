package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Acesso;
import com.swmi.manutencao.domain.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AcessoRepository extends JpaRepository<Acesso, Long> {
    Optional<Acesso> findByCargo(Cargo cargo);
}
