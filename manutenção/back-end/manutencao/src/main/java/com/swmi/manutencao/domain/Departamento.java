package com.swmi.manutencao.domain;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;


@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_Departamento")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"departamento"})})
public class Departamento {
  @Id
  @EqualsAndHashCode.Include
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String departamento;

  @Column(nullable = false)
  private String status;
}
