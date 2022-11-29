package com.swmi.manutencao.services;

import com.swmi.manutencao.domain.Esp;
import com.swmi.manutencao.repository.EspRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EspService {

    @Autowired
    private EspRepository espRepository;

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
}
