package com.swmi.manutencao.repository;


import com.swmi.manutencao.domain.Esp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EspRepository extends JpaRepository<Esp, Long> {

}
