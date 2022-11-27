package com.swmi.manutencao.services;

import com.swmi.manutencao.domain.Area;
import com.swmi.manutencao.domain.Tecnologia;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.TecnologiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TecnologiaService {
    @Autowired
    private TecnologiaRepository tecnologiaRepository;

    public List<Tecnologia> listar(){
        return tecnologiaRepository.findAll();
    }

    public List<Tecnologia> buscarStatus(String status){
        return tecnologiaRepository.findByStatus(status);
    }

    public Tecnologia buscarTecnologia(String tecnologia){
        return tecnologiaRepository.findByTecnologia(tecnologia)
                .orElseThrow(() -> new NaoEncontradoException("Tecnologia", tecnologia));
    }

    public Tecnologia buscarId(Long id){
        String idString = String.valueOf(id);
        return tecnologiaRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("Tecnologia", idString));
    }

    public Tecnologia salvar(Tecnologia tecnologia){
        try{
            return tecnologiaRepository.save(tecnologia);
        }catch (DataIntegrityViolationException e){
            String tecnologiaSalvar = tecnologia.getTecnologia();
            throw new CadastroExistenteException("Tecnologia", tecnologiaSalvar);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }

}
