package com.swmi.manutencao.services;

import com.swmi.manutencao.domain.Acesso;
import com.swmi.manutencao.domain.Cargo;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.AcessoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AcessoService {
    @Autowired
    private CargoService cargoService;
    @Autowired
    private AcessoRepository acessoRepository;

    public Acesso buscarAcesso(Long id){
        Cargo cargo = cargoService.buscaId(id);
        String idString = String.valueOf(id);
        return acessoRepository.findByCargo(cargo)
                .orElseThrow(() -> new NaoEncontradoException("Cargo", idString));
    }
}
