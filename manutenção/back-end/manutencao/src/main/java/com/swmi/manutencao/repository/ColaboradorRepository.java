package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.Colaborador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface ColaboradorRepository extends JpaRepository<Colaborador, Long> {

    List<Colaborador> findListaByStatus(String status);
    List<Colaborador> findByEspecialidade(Long especialidadeId);
    List<Colaborador> findByTurno(Long turnoId);
    List<Colaborador> findByUo(Long areaId);
    List<Colaborador> findListByCargo(Long cargoId);

    List<Colaborador> findListByDepartamento(Long departamentoId);
    Optional<Colaborador> findByRegistro(String registro);

    Optional<Colaborador> findByRegistroAndSenha(String registro, String senha);

}
