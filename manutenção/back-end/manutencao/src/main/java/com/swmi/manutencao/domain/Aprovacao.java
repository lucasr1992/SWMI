package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_Aprovacao")
public class Aprovacao {
  @Id
  @EqualsAndHashCode.Include
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String descricao;

  @Column(nullable = false)
  private String itemRequisicao;

  @ManyToOne
  @JoinColumn
  private UO uoItem;

  @ManyToOne
  @JoinColumn
  private Departamento departamentoItem;

  @CreationTimestamp
  private LocalDateTime dataRequisicao;

  @ManyToOne
  @JoinColumn
  private Colaborador requisitante;

  private String nivelNecessario;

  @UpdateTimestamp
  private LocalDateTime dataAprovacao;

  @ManyToOne
  @JoinColumn
  private Colaborador aprovador;

  @Column(nullable = false)
  private String status;


}





