package com.swmi.manutencao.repository.Comand;

import com.swmi.manutencao.domain.UnidadeNegocio;
import com.swmi.manutencao.repository.UnidadeNegocioRepository;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Component
public class UnidadeNegocioCmd implements UnidadeNegocioRepository {
    @PersistenceContext
    private EntityManager manager;

    @Override
    public List<UnidadeNegocio> listar(){
        return manager.createQuery("from UnidadeNegocio", UnidadeNegocio.class).getResultList();
    }

    @Override
    public List<UnidadeNegocio> consultaAtivos(){
        return manager.createQuery("from UnidadeNegocio where status = 'ATIVO'", UnidadeNegocio.class)
                .getResultList();
    }

    @Override
    public List<UnidadeNegocio> consultaDesativados(){
        return manager.createQuery("from UnidadeNegocio where status = 'DESATIVADO'", UnidadeNegocio.class)
                .getResultList();
    }

    @Override
    public UnidadeNegocio buscar(Long id){
        return manager.find(UnidadeNegocio.class, id);
    }

    @Transactional
    @Override
    public UnidadeNegocio salvar(UnidadeNegocio unidadeNegocio){
        return manager.merge(unidadeNegocio);
    }

    @Override
    public UnidadeNegocio buscarBu(String business){
        return manager.createQuery("from UnidadeNegocio where business = :business", UnidadeNegocio.class)
                .setParameter("business", business).getSingleResult();
    }

}
