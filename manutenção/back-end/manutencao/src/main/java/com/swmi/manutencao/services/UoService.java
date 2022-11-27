package com.swmi.manutencao.services;

import com.swmi.manutencao.domain.UO;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.UoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UoService {
    @Autowired
    private UoRepository uoRepository;

    public List<UO> listar(){
        return  uoRepository.findAll();
    }

    public List<UO> buscarStatus(String status){
        return uoRepository.findByStatus(status);
    }

    public UO buscarUo(String uo){
        return uoRepository.findByUo(uo)
                .orElseThrow(() -> new NaoEncontradoException("UO", uo));
    }

    public UO buscarId(Long id){
        String idString = String.valueOf(id);
        return uoRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("UO", idString));
    }

    public UO salvar(UO uo){
        try{
            return uoRepository.save(uo);
        }catch (DataIntegrityViolationException e){
            String uoString = uo.getUo();
            throw new CadastroExistenteException("UO", uoString);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }


}
