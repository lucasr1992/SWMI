package com.swmi.manutencao.resources;


import com.swmi.manutencao.domain.Area;
import com.swmi.manutencao.domain.Linha;
import com.swmi.manutencao.services.LinhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/linhas")
@CrossOrigin
public class LinhaResource {
    @Autowired
    private LinhaService linhaService;

    @GetMapping
    public List<Linha> listarArea(){
        return linhaService.lista();
    }

    @GetMapping("/status/{status}")
    public List<Linha> listarStatus(@PathVariable String status){
        return linhaService.buscarStatus(status);
    }

    @GetMapping("/{linha}")
    public Linha buscarArea(@PathVariable String linha){
        return linhaService.buscarLinha(linha);
    }

    @GetMapping("/id/{id}")
    public Linha buscaId(@PathVariable Long id){
        return linhaService.buscarId(id);
    }

    @PostMapping
    public Linha adicionar(@RequestBody Linha linha){
        return linhaService.salvar(linha);
    }

    @PutMapping("/desativar/{linha}")
    public Linha desativar(@PathVariable String linha){
        Linha linhaDesativar = linhaService.buscarLinha(linha);
        linhaDesativar.setStatus("DESATIVADO");
        return linhaService.salvar(linhaDesativar);
    }

    @PutMapping("/ativar/{linha}")
    public Linha ativar(@PathVariable String linha){
        Linha linhaAtivar = linhaService.buscarLinha(linha);
        linhaAtivar.setStatus("ATIVO");
        return linhaService.salvar(linhaAtivar);
    }
}
