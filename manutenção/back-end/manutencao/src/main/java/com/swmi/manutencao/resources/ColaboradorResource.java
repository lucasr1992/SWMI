package com.swmi.manutencao.resources;



import com.swmi.manutencao.domain.Aprovacao;
import com.swmi.manutencao.domain.Colaborador;

import com.swmi.manutencao.exceptions.PermissaoException;
import com.swmi.manutencao.services.AprovacaoService;
import com.swmi.manutencao.services.ColaboradorService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/colaboradores")
@CrossOrigin
public class ColaboradorResource {
    @Autowired
    private ColaboradorService colaboradorService;

    @Autowired
    private AprovacaoService aprovacaoService;

   @GetMapping
    public List<Colaborador> listarColaborador(){
       return colaboradorService.listar();
   }

   @GetMapping("/registro/{registro}")
    public Colaborador buscarRegistro(@PathVariable String registro){
       return colaboradorService.buscarRegistro(registro);
   }


   @GetMapping("/status/{status}")
    public List<Colaborador> listarStatus(@PathVariable String status){
       return colaboradorService.listarStatus(status);
   }

   @GetMapping("/especialidade/{id}")
    public List<Colaborador> listarEspecialidade(@PathVariable Long id){
       return colaboradorService.listarEspecialidade(id);
   }

   @GetMapping("/turno/{id}")
    public List<Colaborador> listarTurno(@PathVariable Long id){
       return colaboradorService.listarTurno(id);
   }

   @GetMapping("/area/{id}")
    public List<Colaborador> listarArea(@PathVariable Long id){
       return colaboradorService.listarArea(id);
   }

   @GetMapping("/cargo/{id}")
    public List<Colaborador> listarCargo(@PathVariable Long id){
       return colaboradorService.listarCargo(id);
   }

   @PostMapping
    public Colaborador adicionar(@RequestBody Colaborador colaborador){
       return colaboradorService.salvar(colaborador);
   }


  @PutMapping("/edit/{registro}")
  public Colaborador editar(@PathVariable String registro,
                            @RequestBody Colaborador colaboradorAtt){
    Colaborador colaboradorEdit = colaboradorService.buscarRegistro(registro);
    BeanUtils.copyProperties(colaboradorAtt, colaboradorEdit,
      "registro", "nome", "data_cadastro", "data_desativacao", "status" );
    return colaboradorService.salvar(colaboradorEdit);
  }

  @PostMapping("/pendencia")
  public Aprovacao gerarPendencia(@RequestBody Aprovacao aprovacao){
     return colaboradorService.pendenciasAprovacao(aprovacao);
  }

  @PutMapping("/pendencia/{parametro}")
  public Aprovacao fecharPendencia(@RequestBody Aprovacao aprovacao, @PathVariable String parametro){
      return colaboradorService.pendencias(aprovacao, parametro);
   }



}
