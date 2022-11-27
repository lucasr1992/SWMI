package com.swmi.manutencao.resources;

import com.swmi.manutencao.domain.Area;
import com.swmi.manutencao.domain.UO;
import com.swmi.manutencao.services.UoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/uos")
@CrossOrigin
public class UoResource {
    @Autowired
    private UoService uoService;

    @GetMapping
    public List<UO> listarUo(){
        return uoService.listar();
    }

    @GetMapping("/status/{status}")
    public List<UO> listarAtivos(@PathVariable String status){

        return uoService.buscarStatus(status);
    }

    @GetMapping("/{uo}")
    public UO buscarUo(@PathVariable String uo){
        return uoService.buscarUo(uo);
    }

    @GetMapping("/id/{id}")
    public UO buscaId(@PathVariable Long id){
        return uoService.buscarId(id);
    }

    @PostMapping
    public UO adicionar(@RequestBody UO uo){
        return uoService.salvar(uo);
    }


    @PutMapping("/desativar/{uo}")
    public UO desativar(@PathVariable String uo){
        UO uoDesativar = uoService.buscarUo(uo);
        uoDesativar.setStatus("DESATIVADO");
        return uoService.salvar(uoDesativar);
    }

    @PutMapping("/ativar/{uo}")
    public UO ativar(@PathVariable String uo){
        UO uoAtivar = uoService.buscarUo(uo);
        uoAtivar.setStatus("ATIVO");
        return uoService.salvar(uoAtivar);
    }
}
