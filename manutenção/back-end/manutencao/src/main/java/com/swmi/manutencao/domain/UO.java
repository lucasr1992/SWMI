package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_uo")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"uo"})})
public class UO {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String uo;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Planta planta;

    @Column(nullable = false)
    private String status;


}
