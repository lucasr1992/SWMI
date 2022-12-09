insert into tb_departamento (departamento, status) values ('MANUTENÇÃO', 'ATIVO');
insert into tb_departamento (departamento, status) values ('QUALIDADE', 'ATIVO');
insert into tb_departamento (departamento, status) values ('PRODUÇÃO', 'ATIVO');
insert into tb_departamento (departamento, status) values ('ENGENHARIA', 'ATIVO');

insert into tb_especialidade (especialidade, status) values ("MECÂNICO", 'ATIVO');
insert into tb_especialidade (especialidade, status) values ("ELÉTRICO", 'ATIVO');
insert into tb_especialidade (especialidade, status) values ("ELETRÔNICO", 'ATIVO');
insert into tb_especialidade (especialidade, status) values ("SISTEMAS", 'ATIVO');
insert into tb_especialidade (especialidade, status) values ("OPERAÇÃO", 'ATIVO');

insert into tb_turno (turno, status) values ("1º", 'ATIVO');
insert into tb_turno (turno, status) values ("2º", 'ATIVO');
insert into tb_turno (turno, status) values ("3º", 'ATIVO');
insert into tb_turno (turno, status) values ("ADM", 'ATIVO');
insert into tb_turno (turno, status) values ("CENTRAL", 'ATIVO');

insert into tb_cargo (cargo, status) values ("GERENTE", 'ATIVO');
insert into tb_cargo (cargo, status) values ("OPERADOR", 'ATIVO');
insert into tb_cargo (cargo, status) values ("TECNICO", 'ATIVO');
insert into tb_cargo (cargo, status) values ("SUPERVISOR", 'ATIVO');

insert into tb_tecnologia (tecnologia, status) values ("USINAGEM", 'ATIVO');
insert into tb_tecnologia (tecnologia, status) values ("INJEÇÃO", 'ATIVO');
insert into tb_tecnologia (tecnologia, status) values ("SMD", 'ATIVO');
insert into tb_tecnologia (tecnologia, status) values ("MONTAGEM", 'ATIVO');

insert into tb_tipoequipamento (tipoequipamento, status) values ("MAQUINA", 'ATIVO');
insert into tb_tipoequipamento (tipoequipamento, status) values ("PERIFERICO", 'ATIVO');
insert into tb_tipoequipamento (tipoequipamento, status) values ("BANCADA", 'ATIVO');

insert into tb_unidade_negocio (business, nome, status) values ('PWT', 'POWERTRAIN', 'ATIVO');
insert into tb_unidade_negocio (business, nome, status) values ('ELS', 'ELECTRONIC SYSTEMS', 'ATIVO');
insert into tb_unidade_negocio (business, nome, status) values ('IBU', 'INTERIOR EXPERIENCE', 'ATIVO');
insert into tb_unidade_negocio (business, nome, status) values ('GTS', 'GREEN TECHNOLOGY SYSTEM', 'ATIVO');
insert into tb_unidade_negocio (business, nome, status) values ('RD', 'RIDE DYNAMICS', 'ATIVO');
insert into tb_unidade_negocio (business, nome, status) values ('AL', 'AUTOMOTIVE LIGHTS', 'ATIVO');


insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('HORTOLÂNDIA - PWT', 1, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('HORTOLÂNDIA - ELS', 2, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('HORTOLÂNDIA - IBU', 3, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('AMPARO', 4, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('MAUÁ', 5, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('LAVRAS', 5, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('CONTAGEM', 6, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('RESENDE', 3, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('CABO DE SANTO AGOSTINHO', 4, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('GOIANA', 5, "BRASIL", "SOUTH AMERICA", 'ATIVO');
insert into tb_planta (planta, unidade_id, pais, regiao, status) values ('CORDOBA', 4, "ARGENTINA", "SOUTH AMERICA", 'ATIVO');


insert into tb_uo (uo, planta_id, status) values ("FREE CHOICE", 1, "ATIVO");
insert into tb_uo (uo, planta_id, status) values ("INJETOR", 1, "ATIVO");
insert into tb_uo (uo, planta_id, status) values ("COLETOR", 1, "ATIVO");
insert into tb_uo (uo, planta_id, status) values ("INJEÇÃO", 1, "ATIVO");


insert into tb_area (area, centro_custo, uo_id, status) values ("DIMINIO 1", "CC23455F", 1, 'ATIVO');
insert into tb_area (area, centro_custo, uo_id, status) values ("DOMINIO 2", "CC5667YY", 1, 'ATIVO');
insert into tb_area (area, centro_custo, uo_id, status) values ("DOMINIO 3", "CC2344N", 1, 'ATIVO');
insert into tb_area (area, centro_custo, uo_id, status) values ("DOMINIO 4", "CC7830PP", 1, 'ATIVO');


insert into tb_linha (linha, area_id, status) values ("DBW#1", 1, "ATIVO");
insert into tb_linha (linha, area_id, status) values ("DBW#2", 1, "ATIVO");
insert into tb_linha (linha, area_id, status) values ("PICO ECO", 2, "ATIVO");

insert into tb_colaborador(registro, nome, email, status, uo_id, senha, cargo_id, departamento_id) values ("9002065", "LUCAS RODRIGUES", "LUCAS.RODRIGUES@TESTE.COM", "ATIVO", 1, "1234", 4, 1);
insert into tb_colaborador(registro, nome, email, status,  uo_id, senha, cargo_id, departamento_id) values ("101010", "OPERADOR TESTE", "OPERADOR.TESTE@TESTE.COM", "ATIVO", 1, "1234", 2, 3);
insert into tb_colaborador(registro, nome, email, status,  uo_id, senha, cargo_id, departamento_id) values ("202020", "TECNICO TESTE", "TECNICO.TESTE@TESTE.com", "ATIVO", 1, "1234", 3, 1);


insert into tb_esp(equipamento, parametro, valor) values ("BMZT-001", "TEMPERATURA", "300");

insert into tb_acesso(cargo_id, pagina, cadastro, edicao, pendencias_acao, pendencias_visualizacao) values (4, "Registro", 1, 1, 1, 1);