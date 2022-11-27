package com.swmi.manutencao.services;


import com.swmi.manutencao.domain.UnidadeNegocio;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.UnidadeRepository;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class UnidadeNegocioService {


    @Autowired
    private UnidadeRepository unidadeRepository;

    public List<UnidadeNegocio> listar(){
        return unidadeRepository.findAll();
    }

    public List<UnidadeNegocio> buscarStatus(String status){
        return unidadeRepository.findByStatus(status);
    }

    public UnidadeNegocio buscarBusiness(String unidade){
        return unidadeRepository.findByBusiness(unidade)
                .orElseThrow(() -> new NaoEncontradoException("Unidade de Negocio", unidade));
    }

    public UnidadeNegocio buscarId(Long id){
        String idString = String.valueOf(id);
        return unidadeRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("Unidade de Negocio", idString ));
    }


    public UnidadeNegocio salvar(UnidadeNegocio unidadeNegocio){
        try{
            return unidadeRepository.save(unidadeNegocio);
        }catch (DataIntegrityViolationException e){
            String unidade = unidadeNegocio.getBusiness();
            throw new CadastroExistenteException("Unidade de Negocio", unidade);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }
}
