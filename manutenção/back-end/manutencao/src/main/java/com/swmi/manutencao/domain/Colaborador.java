package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_Colaborador")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"registro"})})
public class Colaborador {
    @Id
    @EqualsAndHashCode.Include
    private String registro;

    @Column(nullable = false)
    private String nome;

    @Column
    private String email;

    @CreationTimestamp
    private LocalDateTime dataCadastro;

    @Column(nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn
    private Especialidade especialidade;

    @ManyToOne
    @JoinColumn
    private Turno turno;

    @ManyToOne
    @JoinColumn(nullable = false)
    private UO uo;

    @Column(nullable = false)
    private String senha;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Cargo cargo;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Departamento departamento;

    private LocalDateTime dataDesativacao;

    @UpdateTimestamp
    private LocalDateTime dataRevisao;
}
