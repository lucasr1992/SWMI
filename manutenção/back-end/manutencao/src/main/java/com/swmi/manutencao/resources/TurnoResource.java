package com.swmi.manutencao.resources;



import com.swmi.manutencao.domain.Cargo;
import com.swmi.manutencao.domain.Turno;
import com.swmi.manutencao.services.TurnoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/turnos")
@CrossOrigin
public class TurnoResource {
    @Autowired
    private TurnoService turnoService;

    @GetMapping
    public List<Turno> listar(){
        return turnoService.listar();
    }

    @GetMapping("/status/{status}")
    public List<Turno> listarAtivos(@PathVariable String status){
        return turnoService.buscarStatus(status);
    }

    @GetMapping("/{turno}")
    public Turno buscarTurno(@PathVariable String turno){
        return turnoService.buscarTurno(turno);
    }

    @GetMapping("/id/{id}")
    public Turno buscarTurno(@PathVariable Long id){
        return turnoService.buscaId(id);
    }

    @PostMapping
    public Turno adicionar(@RequestBody Turno turno){
        return turnoService.salvar(turno);
    }

    @PutMapping("/desativar/{id}")
    public Turno desativar(@PathVariable Long id){
        System.out.println(id);
        Turno turnoDesativar = turnoService.buscaId(id);
        turnoDesativar.setStatus("DESATIVADO");
        return turnoService.salvar(turnoDesativar);
    }

    @PutMapping("/ativar/{id}")
    public Turno ativar(@PathVariable Long id){
        Turno turnoAtivar = turnoService.buscaId(id);
        turnoAtivar.setStatus("ATIVO");
        return turnoService.salvar(turnoAtivar);
    }

}
