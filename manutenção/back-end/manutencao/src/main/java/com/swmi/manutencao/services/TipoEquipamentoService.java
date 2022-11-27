package com.swmi.manutencao.services;

import com.swmi.manutencao.domain.Planta;
import com.swmi.manutencao.domain.TipoEquipamento;
import com.swmi.manutencao.domain.UnidadeNegocio;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.TipoEquipamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipoEquipamentoService {
    @Autowired
    private TipoEquipamentoRepository tipoEquipamentoRepository;

    public List<TipoEquipamento> listar(){
        return tipoEquipamentoRepository.findAll();
    }

    public List<TipoEquipamento> buscarStatus(String status){
        return tipoEquipamentoRepository.findByStatus(status);
    }

    public TipoEquipamento buscarTipo(String tipo){
        return tipoEquipamentoRepository.findByTipoequipamento(tipo)
                .orElseThrow(() -> new NaoEncontradoException("Tipo de Equipamento", tipo));
    }

    public TipoEquipamento buscarId(Long id){
        String idString = String.valueOf(id);
        return tipoEquipamentoRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("Tipo de Equipamento", idString));
    }

    public TipoEquipamento salvar(TipoEquipamento tipo){
        try{
            return tipoEquipamentoRepository.save(tipo);
        }catch (DataIntegrityViolationException e){
            String tipoEquip = tipo.getTipoequipamento();
            throw new CadastroExistenteException("Tipo de Equipamento ", tipoEquip);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }


}
