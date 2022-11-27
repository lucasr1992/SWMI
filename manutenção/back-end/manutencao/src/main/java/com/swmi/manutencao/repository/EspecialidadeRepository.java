package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Especialidade;
import com.swmi.manutencao.domain.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EspecialidadeRepository extends JpaRepository<Especialidade, Long> {
    Optional<Especialidade> findByEspecialidade(String especialidade);

    List<Especialidade> findByStatus(String status);
}
