package com.swmi.manutencao.services;


import com.swmi.manutencao.domain.Area;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.AreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AreaService {
    @Autowired
    private AreaRepository areaRepository;

    public List<Area> listar(){
        return areaRepository.findAll();
    }

    public List<Area> buscarStatus(String status){
        return areaRepository.findByStatus(status);
    }

    public Area buscarArea(String area){
        return areaRepository.findByArea(area)
                .orElseThrow(() -> new NaoEncontradoException("Area", area));
    }

    public Area buscaId(Long id){
        String idString = String.valueOf(id);
        return areaRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("Area", idString));
    }



    public Area salvar(Area area){
        try{
            return areaRepository.save(area);
        }catch (DataIntegrityViolationException e){
            String areaSalvar = area.getArea();
            throw new CadastroExistenteException("Area", areaSalvar);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }


}
