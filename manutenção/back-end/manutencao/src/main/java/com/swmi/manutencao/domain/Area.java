package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_Area")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"area"})})
public class Area {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String area;

    @Column(nullable = false)
    private String centroCusto;

    @ManyToOne
    @JoinColumn(nullable = false)
    private UO uo;

    @Column(nullable = false)
    private String status;
}
