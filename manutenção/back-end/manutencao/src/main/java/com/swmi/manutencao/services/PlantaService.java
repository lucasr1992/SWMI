package com.swmi.manutencao.services;


import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.swmi.manutencao.domain.Planta;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.PlantaRepository;
import org.hibernate.TransientPropertyValueException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlantaService {

    @Autowired
    private PlantaRepository plantaRepository;

    public List<Planta> listar(){
        return plantaRepository.findAll();
    }

    public List<Planta> buscarStatus(String status){
        return plantaRepository.findByStatus(status);
    }



    public Planta buscarPlanta(String planta){
        return plantaRepository.findByPlanta(planta)
                .orElseThrow(() -> new NaoEncontradoException("Planta", planta));
    }

    public Planta buscarId(Long id){
        String idString = String.valueOf(id);
        return plantaRepository.findById(id)
          .orElseThrow(() -> new NaoEncontradoException("Palnta", idString));
    }


    public Planta salvar(Planta planta){
        try{
            return plantaRepository.save(planta);
        }catch (DataIntegrityViolationException e){
            String plantaBusca = planta.getPlanta();
            throw new CadastroExistenteException("Planta", plantaBusca);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }
}
