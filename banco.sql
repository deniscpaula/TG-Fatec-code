drop schema devops;
CREATE SCHEMA devops DEFAULT CHARACTER SET utf8;

create table devops.empresa (
	codigo int NOT NULL AUTO_INCREMENT,
	nome_fantasia varchar(70) NOT NULL,
	razao_social varchar(150),
	status boolean,
	CONSTRAINT pk__empresa__codigo PRIMARY KEY (codigo)
);

create table devops.usuario (
	codigo int NOT NULL AUTO_INCREMENT,
	email varchar(70) NOT NULL,
	senha varchar(100) NOT NULL,
	status boolean,
	CONSTRAINT pk__usuario__codigo PRIMARY KEY (codigo),
	CONSTRAINT uc__usuario__email UNIQUE (email)
);

create table devops.cargo (
	codigo int NOT NULL AUTO_INCREMENT,
	nome varchar(70) NOT NULL,
	descricao text,
	status boolean,
	fk_empresa int NOT NULL,
	CONSTRAINT pk__cargo__codigo PRIMARY KEY (codigo),
	CONSTRAINT fk__cargo__empresa FOREIGN KEY (fk_empresa) REFERENCES devops.empresa(codigo)
);

create table devops.colaborador (
	codigo int NOT NULL AUTO_INCREMENT,
	nome varchar(170) NOT NULL,
	apelido varchar(25),
	cpf varchar(14),
	administrador boolean,
	fk_empresa int NOT NULL,
	fk_cargo int,
	fk_usuario int NOT NULL,
	CONSTRAINT pk__colaborador__codigo PRIMARY KEY (codigo),
	CONSTRAINT fk__colaborador__empresa FOREIGN KEY (fk_empresa) REFERENCES devops.empresa(codigo),
	CONSTRAINT fk__colaborador__cargo FOREIGN KEY (fk_cargo) REFERENCES devops.cargo(codigo),
	CONSTRAINT fk__colaborador__usuario FOREIGN KEY (fk_usuario) REFERENCES devops.usuario(codigo),
	CONSTRAINT uc__colaborador__usuario UNIQUE (fk_usuario)
);

create table devops.prioridade (
	codigo int NOT NULL AUTO_INCREMENT,
	nome varchar(15) NOT NULL,
	cor varchar(7), 
	status boolean,
	CONSTRAINT pk__prioridade__codigo PRIMARY KEY (codigo)
);

create table devops.processo (
	codigo int NOT NULL AUTO_INCREMENT,
	nome varchar(70) NOT NULL,
	sigla varchar(8),
	descricao text,
	cor varchar(7),
	status boolean,
	fk_empresa int NOT NULL,
	CONSTRAINT pk__processo__codigo PRIMARY KEY (codigo),
	CONSTRAINT fk__processo__empresa FOREIGN KEY (fk_empresa) REFERENCES devops.empresa(codigo)
);

create table devops.tipo (
	codigo int NOT NULL AUTO_INCREMENT,
	nome varchar(70) NOT NULL,
	sigla varchar(8),
	status boolean,
	fk_empresa int NOT NULL,
	CONSTRAINT pk__tipo__codigo PRIMARY KEY (codigo),
	CONSTRAINT fk__tipo__empresa FOREIGN KEY (fk_empresa) REFERENCES devops.empresa(codigo)
);

create table devops.produto (
	codigo int NOT NULL AUTO_INCREMENT,
	nome varchar(70) NOT NULL,
	descricao text,
	status boolean,
	fk_empresa int NOT NULL,
	CONSTRAINT pk__produto__codigo PRIMARY KEY (codigo),
	CONSTRAINT fk__produto__empresa FOREIGN KEY (fk_empresa) REFERENCES devops.empresa(codigo)
);

create table devops.cliente (
	codigo int NOT NULL AUTO_INCREMENT,
	nome_fantasia varchar(70) NOT NULL,
	razao_social varchar(150) NOT NULL,
	cnpj varchar(18),
	telefone varchar(15),
	email varchar(70),
	status boolean,
	fk_empresa int NOT NULL,
	CONSTRAINT pk__cliente__codigo PRIMARY KEY (codigo),
	CONSTRAINT fk__cliente__empresa FOREIGN KEY (fk_empresa) REFERENCES devops.empresa(codigo)
);

create table devops.chamado (
	codigo int NOT NULL AUTO_INCREMENT,
	codigo_interno int NOT NULL DEFAULT 1,
	assunto varchar(70) NOT NULL,
	descricao text NOT NULL,
	prazo timestamp DEFAULT NULL,
	status boolean,
	fk_prioridade int NOT NULL,
	fk_cliente int,
	fk_processo int,
	fk_tipo int,
	fk_responsavel int,
	fk_produto int,
	fk_empresa int NOT NULL,
	CONSTRAINT pk__chamado__codigo PRIMARY KEY (codigo),
	CONSTRAINT fk__chamado__prioridade FOREIGN KEY (fk_prioridade) REFERENCES devops.prioridade(codigo),
	CONSTRAINT fk__chamado__cliente FOREIGN KEY (fk_cliente) REFERENCES devops.cliente(codigo),
	CONSTRAINT fk__chamado__processo FOREIGN KEY (fk_processo) REFERENCES devops.processo(codigo),
	CONSTRAINT fk__chamado__tipo FOREIGN KEY (fk_tipo) REFERENCES devops.tipo(codigo),
	CONSTRAINT fk__chamado__responsavel FOREIGN KEY (fk_responsavel) REFERENCES devops.colaborador(codigo),
	CONSTRAINT fk__chamado__produto FOREIGN KEY (fk_produto) REFERENCES devops.produto(codigo),
	CONSTRAINT fk__historico__empresa FOREIGN KEY (fk_empresa) REFERENCES devops.empresa(codigo)
);


create table devops.historico (
	codigo int NOT NULL AUTO_INCREMENT,
	titulo varchar(70) NOT NULL,
	descricao text,
	data timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	fk_chamado int NOT NULL,
	fk_colaborador int NOT NULL,
	CONSTRAINT pk__historico__codigo PRIMARY KEY (codigo),
	CONSTRAINT fk__historico__chamado FOREIGN KEY (fk_chamado) REFERENCES devops.chamado(codigo),
	CONSTRAINT fk__historico__colaborador FOREIGN KEY (fk_colaborador) REFERENCES devops.colaborador(codigo)
);


-- PRIORIDADE
INSERT INTO devops.prioridade (nome, cor, status) VALUES('Baixa', '#3cc184', true);
INSERT INTO devops.prioridade (nome, cor, status) VALUES('Média', '#ff9613', true);
INSERT INTO devops.prioridade (nome, cor, status) VALUES('Alta', '#e8474a', true);


DROP TRIGGER IF EXISTS devops.tgr_codigo_produto;
DELIMITER $

CREATE TRIGGER devops.tgr_codigo_produto BEFORE INSERT ON chamado FOR EACH ROW
	BEGIN
		IF ((SELECT codigo_interno FROM (SELECT codigo_interno FROM chamado WHERE fk_empresa = NEW.fk_empresa ORDER BY codigo DESC LIMIT 1) AS chamado) IS NOT NULL) THEN
            SET NEW.codigo_interno = (SELECT codigo_interno FROM (SELECT codigo_interno FROM chamado WHERE fk_empresa = NEW.fk_empresa ORDER BY codigo DESC LIMIT 1) AS chamado) + 1;
        ELSE
            SET NEW.codigo_interno = 1000;
        END IF;
	END$
DELIMITER ;



/*DROP TRIGGER IF EXISTS devops.tgr_codigo_produto;
DELIMITER $

CREATE TRIGGER devops.tgr_codigo_produto BEFORE INSERT ON chamado FOR EACH ROW
	BEGIN
		SET NEW.codigo_interno = 
			((SELECT codigo_interno FROM 
				(	
					SELECT codigo_interno 
					FROM chamado
					WHERE fk_empresa = NEW.fk_empresa ORDER BY codigo DESC LIMIT 1
				) AS chamado
			) + 1);
	END$
DELIMITER ;*/


