package com.swmi.manutencao.services;


import com.swmi.manutencao.domain.Cargo;
import com.swmi.manutencao.domain.Turno;
import com.swmi.manutencao.exceptions.CadastroExistenteException;
import com.swmi.manutencao.exceptions.EntradaErradaException;
import com.swmi.manutencao.exceptions.NaoEncontradoException;
import com.swmi.manutencao.repository.TurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurnoService {
    @Autowired
    private TurnoRepository turnoRepository;

    public List<Turno> listar(){
        return turnoRepository.findAll();
    }

    public List<Turno> buscarStatus(String status){
        return turnoRepository.findByStatus(status);
    }

    public Turno buscarTurno(String turno){
        return turnoRepository.findByTurno(turno)
                .orElseThrow(() -> new NaoEncontradoException("Especialidade", turno));
    }

    public Turno buscaId(Long id){
        String idString = String.valueOf(id);
        return turnoRepository.findById(id)
                .orElseThrow(() -> new NaoEncontradoException("Turno", idString));
    }

    public Turno salvar(Turno turno){
        try{
            return turnoRepository.save(turno);
        }catch (DataIntegrityViolationException e){
            String turnoSalvar = turno.getTurno();
            throw new CadastroExistenteException("Turno", turnoSalvar);
        }catch(RuntimeException e){
            throw new EntradaErradaException();
        }
    }

}
