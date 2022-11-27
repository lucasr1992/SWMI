package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Cargo;
import com.swmi.manutencao.domain.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TurnoRepository extends JpaRepository<Turno, Long> {
    Optional<Turno> findByTurno(String turno);

    List<Turno> findByStatus(String status);
}
