package com.swmi.manutencao.services;


import com.swmi.manutencao.domain.Cargo;
import com.swmi.manutencao.domain.UnidadeNegocio;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CargoService {
    @Autowired
    private CargoRepository cargoRepository;

    public List<Cargo> listar(){
        return cargoRepository.findAll();
    }

    public List<Cargo> buscarStatus(String status){
        return cargoRepository.findByStatus(status);
    }

    public Cargo buscarCargo(String cargo){
        return cargoRepository.findByCargo(cargo)
                .orElseThrow(() -> new NaoEncontradoException("Cargo", cargo));
    }

    public Cargo buscaId(Long id){
        String idString = String.valueOf(id);
        return cargoRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("Cargo", idString));
    }

    public Cargo salvar(Cargo cargo){
        try{
            return cargoRepository.save(cargo);
        }catch (DataIntegrityViolationException e){
            String cargoSalvar = cargo.getCargo();
            throw new CadastroExistenteException("Cargo", cargoSalvar);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }



}
