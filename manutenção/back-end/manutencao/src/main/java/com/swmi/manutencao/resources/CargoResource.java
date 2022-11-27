package com.swmi.manutencao.resources;




import com.swmi.manutencao.domain.Cargo;
import com.swmi.manutencao.services.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cargos")
@CrossOrigin
public class CargoResource {
    @Autowired
    private CargoService cargoService;

    @GetMapping
    public List<Cargo> listar(){
        return cargoService.listar();
    }

    @GetMapping("/status/{status}")
    public List<Cargo> listarAtivos(@PathVariable String status){
        return cargoService.buscarStatus(status);
    }

    @GetMapping("/cargo")
    public Cargo buscarCargo(@PathVariable String cargo){
        return cargoService.buscarCargo(cargo);
    }

    @GetMapping("/id/{id}")
    public Cargo buscaId(@PathVariable Long id){
        return cargoService.buscaId(id);
    }

    @PostMapping
    public Cargo adicionar(@RequestBody Cargo cargo){
        return cargoService.salvar(cargo);
    }


    @PutMapping("/desativar/{cargo}")
    public Cargo desativar(@PathVariable String cargo){
        Cargo cargoDesativar = cargoService.buscarCargo(cargo);
        cargoDesativar.setStatus("DESATIVADO");
        return cargoService.salvar(cargoDesativar);
    }

    @PutMapping("/ativar/{cargo}")
    public Cargo ativar(@PathVariable String cargo){
        Cargo cargoAtivar = cargoService.buscarCargo(cargo);
        cargoAtivar.setStatus("ATIVO");
        return cargoService.salvar(cargoAtivar);
    }


}
