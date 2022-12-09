package com.swmi.manutencao.services;


import com.swmi.manutencao.domain.Aprovacao;
import com.swmi.manutencao.domain.Colaborador;
import com.swmi.manutencao.exceptions.*;
import com.swmi.manutencao.repository.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColaboradorService {

    @Autowired
    private ColaboradorRepository colaboradorRepository;



    public List<Colaborador> listar(){
        return colaboradorRepository.findAll();
    }

    public Colaborador buscarRegistro(String registro){
        return colaboradorRepository.findByRegistro(registro)
          .orElseThrow(() -> new NaoEncontradoException("Colaborador", registro));
    }


    public List<Colaborador> listarStatus(String status){
        return colaboradorRepository.findListaByStatus(status);
    }

    public List<Colaborador> listarEspecialidade(Long especialidadeId){
        return colaboradorRepository.findByEspecialidade(especialidadeId);
    }

    public List<Colaborador> listarTurno(Long turnoId){
        return colaboradorRepository.findByTurno(turnoId);
    }

    public List<Colaborador> listarArea(Long areaId){
        return colaboradorRepository.findByUo(areaId);
    }

    public List<Colaborador> listarCargo(Long cargoId){
        return colaboradorRepository.findListByCargo(cargoId);
    }

    public Colaborador salvar(Colaborador colaborador){
        try{
            return colaboradorRepository.save(colaborador);
        }catch (DataIntegrityViolationException e){
            String colaboradorRegistro = colaborador.getRegistro();
            throw new CadastroExistenteException("Registro", colaboradorRegistro);
        }catch (RuntimeException e){
            throw new EntradaErradaException();
        }
    }



    public String verificarStatus(Aprovacao aprovacao){
        Colaborador itemRequisicao = buscarRegistro(aprovacao.getItemRequisicao());
        Colaborador requisitante = buscarRegistro(aprovacao.getRequisitante().getRegistro());
        if(itemRequisicao == requisitante){
            throw new EmUsoException("Colaborador", aprovacao.getItemRequisicao());
        }
        String status = itemRequisicao.getStatus();
        return status;
    }





}
