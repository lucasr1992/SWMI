package com.swmi.manutencao.resources;


import com.swmi.manutencao.domain.Area;
import com.swmi.manutencao.domain.TipoEquipamento;
import com.swmi.manutencao.services.TipoEquipamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tiposequip")
@CrossOrigin
public class TipoEquipamentoResource {
    @Autowired
    private TipoEquipamentoService tipoEquipamentoService;

    @GetMapping
    public List<TipoEquipamento> listarTipos(){
        return tipoEquipamentoService.listar();
    }

    @GetMapping("/status/{status}")
    public List<TipoEquipamento> listarAtivos(@PathVariable String status){
        return tipoEquipamentoService.buscarStatus(status);
    }

    @GetMapping("/{tipo}")
    public TipoEquipamento buscarTipo(@PathVariable String tipo){
        return tipoEquipamentoService.buscarTipo(tipo);
    }

    @GetMapping("/id/{id}")
    public TipoEquipamento buscarId(@PathVariable Long id){
        return tipoEquipamentoService.buscarId(id);
    }

    @PostMapping
    public TipoEquipamento adicionar(@RequestBody TipoEquipamento tipoEquipamento){
        return tipoEquipamentoService.salvar(tipoEquipamento);
    }

    @PutMapping("/desativar/{tipo}")
    public TipoEquipamento desativar(@PathVariable String tipo){
        TipoEquipamento tipoDesativar = tipoEquipamentoService.buscarTipo(tipo);
        tipoDesativar.setStatus("DESATIVADO");
        return tipoEquipamentoService.salvar(tipoDesativar);
    }

    @PutMapping("/ativar/{tipo}")
    public TipoEquipamento ativar(@PathVariable String tipo){
        TipoEquipamento tipoAtivar = tipoEquipamentoService.buscarTipo(tipo);
        tipoAtivar.setStatus("ATIVO");
        return tipoEquipamentoService.salvar(tipoAtivar);
    }

}
