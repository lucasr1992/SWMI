package com.swmi.manutencao.services;

import com.swmi.manutencao.domain.Esp;
import com.swmi.manutencao.domain.Tecnologia;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.repository.EspRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EspService {

    @Autowired
    private EspRepository espRepository;


    public Esp buscar(Long id){
        return espRepository.findById(id).orElseThrow(()-> new RuntimeException());
    }

    public Esp Salvar(String equipamento, String parametro, String valor){
        try {
            Esp espNovo = new Esp();
            espNovo.setEquipamento(equipamento);
            espNovo.setParametro(parametro);
            espNovo.setValor(valor);
            return espRepository.save(espNovo);
        }catch(RuntimeException e){
            throw new RuntimeException(e);
        }
    }


    public Esp Editar(Long id, String valor){
        try {
            Esp esp = buscar(id);
            esp.setValor(valor);
            return espRepository.save(esp);
        }catch(RuntimeException e){
            throw new RuntimeException(e);
        }
    }


}
