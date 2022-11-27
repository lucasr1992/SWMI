//package com.swmi.manutencao.repository;
//
//
//import com.swmi.manutencao.domain.*;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//import java.util.Optional;
//
//@Repository
//public interface MaquinaRepository extends JpaRepository<Maquina, Long> {
//
//    List<Maquina> findByStatus(String status);
//    List<Maquina> findByRequisitoqc(Boolean parametro);
//    List<Maquina> findByRequisitoeng(Boolean parametro);
//    List<Maquina> findByRequisitocliente(Boolean parametro);
//    List<Maquina> findByRequisitoehs(Boolean parametro);
//    List<Maquina> findByFabricante(String fabricante);
//    List<Maquina> findByResponsavel(Colaborador responsavel);
//    List<Maquina> findByLinha(Linha linha);
//    List<Maquina> findByTecnologia(Tecnologia tecnologia);
//    List<Maquina> findByTipoequipamento(TipoEquipamento tipoEquipamento);
//
//
//    Optional<Maquina> findByNumativo(String num);
//    Optional<Maquina> findById(Long id);
//
//    //buscar por classificacao
//    //buscar por data da proxima atualizacao
//
//
//
//}
