package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_linha")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"linha"})})
public class Linha {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String linha;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Area area;

    @Column(nullable = false)
    private String status;

}
