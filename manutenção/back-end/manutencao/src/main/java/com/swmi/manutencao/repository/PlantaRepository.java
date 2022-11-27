package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Planta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlantaRepository extends JpaRepository<Planta, Long> {

    List<Planta> findByStatus(String status);
    Optional<Planta> findByPlanta(String planta);


}
