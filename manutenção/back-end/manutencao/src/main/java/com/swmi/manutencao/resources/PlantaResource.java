package com.swmi.manutencao.resources;



import com.swmi.manutencao.domain.Planta;
import com.swmi.manutencao.domain.UnidadeNegocio;
import com.swmi.manutencao.services.PlantaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/plantas")
@CrossOrigin
public class PlantaResource {

    @Autowired
    private PlantaService plantaService;

    @GetMapping
    public List<Planta> listar(){
        return plantaService.listar();
    }

    @GetMapping("/status/{status}")
    public List<Planta> listarAtivos(@PathVariable String status){
        return plantaService.buscarStatus(status);
    }

    @GetMapping("/{planta}")
    public Planta buscarPlanta(@PathVariable String planta){
        return plantaService.buscarPlanta(planta);
    }

    @GetMapping("/id/{id}")
    public Planta buscarId(@PathVariable Long id){
        return plantaService.buscarId(id);
    }


    @PostMapping
    public Planta adicionar(@RequestBody Planta planta){
        return plantaService.salvar(planta);
    }

    @PutMapping("/desativar/{planta}")
    public Planta desativar(@PathVariable String planta){
        Planta plantaDesativar = plantaService.buscarPlanta(planta);
        plantaDesativar.setStatus("DESATIVADO");
        return plantaService.salvar(plantaDesativar);
    }

    @PutMapping("/ativar/{planta}")
    public Planta ativar(@PathVariable String planta){
        Planta plantaAtivar= plantaService.buscarPlanta(planta);
        plantaAtivar.setStatus("ATIVO");
        return plantaService.salvar(plantaAtivar);
    }

}
