package com.swmi.manutencao.resources;


import com.swmi.manutencao.domain.Especialidade;
import com.swmi.manutencao.domain.Turno;
import com.swmi.manutencao.services.EspecialidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/especialidades")
@CrossOrigin
public class EspecialidadeResource {
    @Autowired
    private EspecialidadeService especialidadeService;

    @GetMapping
    public List<Especialidade> listar(){
        return especialidadeService.listar();
    }

    @GetMapping("/status/{status}")
    public List<Especialidade> listarAtivos(@PathVariable String status){
        return especialidadeService.buscarStatus(status);
    }

    @GetMapping("/{especialidade}")
    public Especialidade buscarEspec(@PathVariable String especialidade){
        return especialidadeService.buscarEspecialidade(especialidade);
    }

    @GetMapping("/id/{id}")
    public Especialidade buscarId(@PathVariable Long id){
        return especialidadeService.buscaId(id);
    }

    @PostMapping
    public Especialidade adicionar(@RequestBody Especialidade especialidade){
        return especialidadeService.salvar(especialidade);
    }

    @PutMapping("/desativar/{especialidade}")
    public Especialidade desativar(@PathVariable String especialidade){
        Especialidade especialidadeDesativar = especialidadeService.buscarEspecialidade(especialidade);
        especialidadeDesativar.setStatus("DESATIVADO");
        return especialidadeService.salvar(especialidadeDesativar);
    }

    @PutMapping("/ativar/{especialidade}")
    public Especialidade ativar(@PathVariable String especialidade){
        Especialidade especialidadeAtivar = especialidadeService.buscarEspecialidade(especialidade);
        especialidadeAtivar.setStatus("ATIVO");
        return especialidadeService.salvar(especialidadeAtivar);
    }


}
