package com.swmi.manutencao.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Currency;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "tb_Maquinas")
public class Maquina {

    @Id
    @EqualsAndHashCode.Include
    private String id;

    @Column(nullable = false)
    private String descricao;

    @ManyToOne
    @JoinColumn(nullable = false)
    private TipoEquipamento tipoEquipamento;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Tecnologia tecnologia;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Linha linha;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Colaborador responsavel;

    @CreationTimestamp
    private LocalDateTime dataCadastro;

    @UpdateTimestamp
    private LocalDateTime dataAtualizacao;

    private LocalDateTime dataProximaAtualizacao;

    private String modelo;

    private String numSerie;

    private String numAtivo;

    private String fabricante; //criar uma tabela de fornecedores ou fabricantes

    private Currency valor;

    private Boolean requisitosQc;

    private Boolean requisitosEng;

    private Boolean requisitosCliente;

    private Boolean requisitosEhs;

    private LocalDate dataInstalacao;

    private LocalDate dataCompra;

    private LocalDate dataFabricacao;

    private LocalDate dataSop;

    private LocalDate dataGarantia;

    private LocalDate dataListaTreinamento;

    private LocalDate dataManual;

    private LocalDate dataEsquemaEletrico;

    private LocalDate dataEsquemaMecanico;

    private LocalDate dataListaComponentes;

    private LocalDate dataListaSpare;

    private LocalDate dataSoftware;

    private LocalDate dataListaPreventivas;

    private LocalDate dataSmp;

    private String status;

    private String classificacao; // precisa vir da tabela classificacao

    private LocalDateTime dataDesativacao;

}
