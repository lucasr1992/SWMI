package com.swmi.manutencao.resources;



import com.swmi.manutencao.domain.UnidadeNegocio;

import com.swmi.manutencao.services.UnidadeNegocioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/unidades")
@CrossOrigin
public class UnidadeNegocioResource {

    @Autowired
    private UnidadeNegocioService unidadeNegocioService;



    @GetMapping
    public List<UnidadeNegocio> listarUnidade(){
        return unidadeNegocioService.listar();
    }

    @GetMapping("/status/{status}")
    public List<UnidadeNegocio> listarAtivos(@PathVariable String status){
        return unidadeNegocioService.buscarStatus(status);
    }


    @GetMapping("/{unidade}")
    public UnidadeNegocio buscarUnidade(@PathVariable String unidade){
        return unidadeNegocioService.buscarBusiness(unidade);
    }

    @GetMapping("/id/{id}")
    public UnidadeNegocio buscarId(@PathVariable Long id){
        return unidadeNegocioService.buscarId(id);
    }

    @PostMapping
    public UnidadeNegocio adicionar(@RequestBody UnidadeNegocio unidadeNegocio){
        return unidadeNegocioService.salvar(unidadeNegocio);
    }

    @PutMapping("/desativar/{unidade}")
    public  UnidadeNegocio desativar(@PathVariable String unidade){
        UnidadeNegocio unidadeDesativar = unidadeNegocioService.buscarBusiness(unidade);
        unidadeDesativar.setStatus("DESATIVADO");
        return unidadeNegocioService.salvar(unidadeDesativar);
    }

    @PutMapping("/ativar/{unidade}")
    public  UnidadeNegocio ativar(@PathVariable String unidade){
        UnidadeNegocio unidadeAtivar = unidadeNegocioService.buscarBusiness(unidade);
        unidadeAtivar.setStatus("ATIVO");
        return unidadeNegocioService.salvar(unidadeAtivar);
    }

}
