package com.swmi.manutencao.resources;

import com.swmi.manutencao.domain.Acesso;
import com.swmi.manutencao.repository.AcessoRepository;
import com.swmi.manutencao.services.AcessoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/acessos")
@CrossOrigin
public class AcessoResource {
    @Autowired
    private AcessoService acessoService;

    @GetMapping("/{id}")
    public Acesso NivelAcesso(@PathVariable Long id){
        return acessoService.buscarAcesso(id);
    }
}
