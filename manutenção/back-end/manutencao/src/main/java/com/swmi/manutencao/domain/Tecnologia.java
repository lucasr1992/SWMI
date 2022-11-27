package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_tecnologia")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"tecnologia"})})
public class Tecnologia {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String tecnologia;

    @Column(nullable = false)
    private String status;
}
