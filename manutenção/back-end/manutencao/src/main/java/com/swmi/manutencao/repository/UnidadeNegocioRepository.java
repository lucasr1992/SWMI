package com.swmi.manutencao.repository;

import com.swmi.manutencao.domain.UnidadeNegocio;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface  UnidadeNegocioRepository {
//5.7 Aula
    List<UnidadeNegocio> listar();
    List<UnidadeNegocio> consultaAtivos();
    UnidadeNegocio buscar(Long id);
    UnidadeNegocio salvar(UnidadeNegocio unidadeNegocio);
    UnidadeNegocio buscarBu(String business);
    List<UnidadeNegocio> consultaDesativados();


}
