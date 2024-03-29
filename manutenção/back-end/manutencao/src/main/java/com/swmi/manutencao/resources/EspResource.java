package com.swmi.manutencao.resources;

import com.swmi.manutencao.domain.Esp;
import com.swmi.manutencao.services.EspService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/esps")
@CrossOrigin
public class EspResource {
    @Autowired
    private EspService espService;

    @GetMapping("/gravar/{equip}/{parametro}/{valor}")
    public Esp gravar(@PathVariable String equip, @PathVariable String parametro, @PathVariable String valor){
        return espService.Salvar(equip, parametro, valor);
    }

    @GetMapping("/editar/{valor}/{id}")
    public Esp editar(@PathVariable Long id, @PathVariable String valor){
        return espService.Editar(id, valor);
    }

    @GetMapping("/busca/{id}")
    public Esp buscarId(@PathVariable Long id){
        return espService.buscar(id);
    }
}
