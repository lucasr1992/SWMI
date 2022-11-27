package com.swmi.manutencao.resources;

import com.swmi.manutencao.domain.Tecnologia;
import com.swmi.manutencao.services.TecnologiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tecnologias")
@CrossOrigin
public class TecnologiaResource {
    @Autowired
    private TecnologiaService tecnologiaService;

    @GetMapping
    public List<Tecnologia> listarTecnologia(){
        return tecnologiaService.listar();
    }

    @GetMapping("/status/{status}")
    public List<Tecnologia> buscarStatus(@PathVariable String status){
        return tecnologiaService.buscarStatus(status);
    }

    @GetMapping("/{tecnologia}")
    public Tecnologia buscartecnologia(@PathVariable String tecnologia){
        return tecnologiaService.buscarTecnologia(tecnologia);
    }

    @GetMapping("/id/{id}")
    public Tecnologia buscarId(@PathVariable Long id){
        return tecnologiaService.buscarId(id);
    }

    @PostMapping
    public Tecnologia adicionar(@RequestBody Tecnologia tecnologia){
        return tecnologiaService.salvar(tecnologia);
    }

    @PutMapping("/desativar/{tecnologia}")
    public Tecnologia desativar(@PathVariable String tecnologia){
        Tecnologia tecnologiaDesativar = tecnologiaService.buscarTecnologia(tecnologia);
        tecnologiaDesativar.setStatus("DESATIVADO");
        return tecnologiaService.salvar(tecnologiaDesativar);
    }

    @PutMapping("/ativar/{tecnologia}")
    public Tecnologia ativar(@PathVariable String tecnologia){
        Tecnologia tecnologiaAtivar = tecnologiaService.buscarTecnologia(tecnologia);
        tecnologiaAtivar.setStatus("ATIVO");
        return tecnologiaService.salvar(tecnologiaAtivar);
    }

}
