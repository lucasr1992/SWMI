package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity (name = "tb_UnidadeNegocio")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"business"})})
public class UnidadeNegocio {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable = false)
    private String business;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String status;

}
