package com.swmi.manutencao.services;


import com.swmi.manutencao.domain.Linha;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.LinhaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LinhaService {

    @Autowired
    private LinhaRepository linhaRepository;

    public List<Linha> lista(){
        return linhaRepository.findAll();
    }

    public List<Linha> buscarStatus(String status){
        return linhaRepository.findByStatus(status);
    }

    public Linha buscarLinha(String linha){
        return linhaRepository.findByLinha(linha)
                .orElseThrow(() -> new NaoEncontradoException("Linha", linha));
    }

    public Linha buscarId(Long id){
        String idString = String.valueOf(id);
        return linhaRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("Linha", idString));
    }

    public Linha salvar(Linha linha){
        try{
            return linhaRepository.save(linha);
        }catch (DataIntegrityViolationException e){
            String linhaSalvar = linha.getLinha();
            throw new CadastroExistenteException("Linha", linhaSalvar);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }
}
