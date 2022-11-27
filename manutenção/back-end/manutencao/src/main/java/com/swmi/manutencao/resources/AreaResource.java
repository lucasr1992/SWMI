package com.swmi.manutencao.resources;




import com.swmi.manutencao.domain.Area;
import com.swmi.manutencao.services.AreaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/areas")
@CrossOrigin
public class AreaResource {
    @Autowired
    private AreaService areaService;

    @GetMapping
    public List<Area> listarArea(){
        return areaService.listar();
    }

    @GetMapping("/status/{status}")
    public List<Area> listarStatus(@PathVariable String status){
        return areaService.buscarStatus(status);
    }

    @GetMapping("/{nomeArea}")
    public Area buscarArea(@PathVariable String nomeArea){
        return areaService.buscarArea(nomeArea);
    }

    @GetMapping("/id/{id}")
    public Area buscaId(@PathVariable Long id){
        return areaService.buscaId(id);
    }

    @PostMapping
    public Area adicionar(@RequestBody Area area){
        return areaService.salvar(area);
    }


    @PutMapping("/desativar/{nomeArea}")
    public Area desativar(@PathVariable String nomeArea){
        Area areaDesativar = areaService.buscarArea(nomeArea);
        areaDesativar.setStatus("DESATIVADO");
        return areaService.salvar(areaDesativar);
    }

    @PutMapping("/ativar/{nomeArea}")
    public Area ativar(@PathVariable String nomeArea){
        Area areaAtivar = areaService.buscarArea(nomeArea);
        areaAtivar.setStatus("ATIVO");
        return areaService.salvar(areaAtivar);
    }

}
