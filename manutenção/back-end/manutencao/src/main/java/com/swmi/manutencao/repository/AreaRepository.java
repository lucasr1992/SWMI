package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Area;
import com.swmi.manutencao.domain.UnidadeNegocio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface AreaRepository extends JpaRepository<Area, Long> {
    Optional<Area> findByArea(String area);

    List<Area> findByStatus(String status);

}
