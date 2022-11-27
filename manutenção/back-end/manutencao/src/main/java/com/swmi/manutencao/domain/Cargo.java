package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_Cargo")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"cargo"})})
public class Cargo{
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String cargo;

    @Column(nullable = false)
    private String status;
}
