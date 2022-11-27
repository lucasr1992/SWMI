package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_tipoequipamento")
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"tipoequipamento"})})
public class TipoEquipamento {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String tipoequipamento;

    @Column(nullable = false)
    private String status;
}
