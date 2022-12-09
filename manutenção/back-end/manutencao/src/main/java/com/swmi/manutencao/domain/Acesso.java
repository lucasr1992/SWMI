
package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_Acesso")
public class Acesso {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn
    private Cargo cargo;

    private String pagina;
    private boolean cadastro;
    private boolean edicao;
    private boolean pendenciasAcao;
    private boolean pendenciasVisualizacao;
}
