package com.swmi.manutencao.services;


import com.swmi.manutencao.domain.Especialidade;
import com.swmi.manutencao.domain.Turno;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.EspecialidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EspecialidadeService {
    @Autowired
    private EspecialidadeRepository especialidadeRepository;

    public List<Especialidade> listar(){
        return especialidadeRepository.findAll();
    }

    public List<Especialidade> buscarStatus(String status){
        return especialidadeRepository.findByStatus(status);
    }

    public Especialidade buscarEspecialidade(String especialidade){
        return especialidadeRepository.findByEspecialidade(especialidade)
                .orElseThrow(() -> new NaoEncontradoException("Especialidade", especialidade));
    }

    public Especialidade buscaId(Long id){
        String idString = String.valueOf(id);
        return especialidadeRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("Especialidade", idString));
    }

    public Especialidade salvar(Especialidade especialidade){
        try{
            return especialidadeRepository.save(especialidade);
        }catch (DataIntegrityViolationException e){
            String especialidadeSalvar = especialidade.getEspecialidade();
            throw new CadastroExistenteException("Especialidade", especialidadeSalvar);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }


}
