drop schema public;
create schema public;

create sequence alunos_seq;
drop sequence alunos_seq;
create table alunos (
	codigo integer  not null,
	nome varchar(100),
	datanascimento date,
	email varchar(200)
);

drop table alunos;

alter table alunos
add constraint pk_aluno primary key (codigo)

alter table alunos
alter column codigo set default nextval('alunos_seq');

insert into ALUNOS (nome, datanascimento, email) values 
('A SAMU TESTE BANCO', '2004-11-04', 'samu@teste.com'),
('B SAMU BANCO TESTE', '2004-11-04', 'samu@teste.com'),
('C SAMU TESTE BANCO', '2004-11-04', 'samu@teste.com'),
('D SAMU BANCO TESTE', '2004-11-04', 'samu@teste.com'),
('E SAMU TESTE BANCO', '2004-11-04', 'samu@teste.com'),
('F SAMU BANCO TESTE', '2004-11-04', 'samu@teste.com'),
('G SAMU TESTE BANCO', '2004-11-04', 'samu@teste.com'),
('H SAMU TESTE BANCO', '2004-11-04', 'samu@teste.com'),
('I SAMU BANCO TESTE', '2004-11-04', 'samu@teste.com'),
('J SAMU TESTE BANCO', '2004-11-04', 'samu@teste.com'),
('K SAMU BANCO TESTE', '2004-11-04', 'samu@teste.com'),
('L SAMU TESTE BANCO', '2004-11-04', 'samu@teste.com'),
('M SAMU BANCO TESTE', '2004-11-04', 'samu@teste.com'),
('N SAMU TESTE BANCO', '2004-11-04', 'samu@teste.com');

select * from alunos order by codigo;

select codigo, nome from alunos
where codigo >= 2 and email ilike '%.com'
order by nome desc, codigo desc;
-- offset 2;
-- limit 2;

update alunos set nome = 'alteração', datanascimento = '2022-12-10' where codigo = 2;

delete from alunos where codigo = 2;

create sequence cursos_seq;
create table cursos (
	id int not null default nextval('cursos_seq'),
	nome varchar(50),
	descricao text,
	nivel int not null,
	duracao int not null,
	constraint pk_cursos primary key (id)
);
select * from cursos;
drop table cursos;

create sequence inscricao_seq;
create table inscricao (
	id int not null default nextval('inscricao_seq'),
	aluno_codigo int,
	curso_id int,
	data_inscricao timestamp default now()
);

alter table inscricao add constraint fk_aluno foreign key (aluno_codigo) references alunos(codigo);
alter table inscricao add constraint fk_curso foreign key (curso_id) references cursos(id);

select * from inscricao;
drop table inscricao;

insert into cursos (nome, descricao, nivel, duracao) values
('curso1', 'decricao1', 3, 93),
('curso2', 'decricao2', 2, 23),
('curso3', 'decricao3', 3, 12);

insert into inscricao (aluno_codigo, curso_id) values 
(1, 7),
(14, 8),
(3, 9),
(6, 8),
(2, 7),
(4, 8),
(9, 9),
(10, 9),
(11, 8),
(1, 7),
(8, 7),
(12, 8);

select a.codigo, a.nome, c.nome, i.data_inscricao
from inscricao i
join alunos a on a.codigo = i.aluno_codigo
join cursos c on c.id = i.curso_id
order by a.codigo;

select a.codigo, a.nome, c.nome, i.data_inscricao
from alunos a
left join inscricao i on i.aluno_codigo = a.codigo
left join cursos c on c.id = i.curso_id
order by a.codigo;
