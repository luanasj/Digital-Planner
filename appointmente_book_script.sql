create schema appointmentBook;

use appointmentBook;

create table goalsAndTasks(
    i_id_goalsAndTasks int primary key auto_increment,
    s_description_goalsAndTasks varchar(255) not null,
    i_type_goalsAndTasks int not null,
    b_accomplished_goalsAndTasks boolean not null,
    d_creation_goalsAndTasks date not null,
    i_dayweek_goalsAndTasks int not null

);

create table goalOrTask (
    i_goalOrTask_goalOrTask int primary key,
    s_dsc_goalOrTask varchar(50) not null
);

alter table goalsAndTasks add constraint fk_type_goalsAndTasks foreign key 
(i_type_goalsAndTasks) references goalOrTask (i_goalOrTask_goalOrTask);

create table dayweek (
    i_dayweek_dayweek int primary key,
    s_dayname_dayweek varchar(50) not null
);

alter table goalsAndTasks add constraint fk_dayweek_goalsAndTasks foreign key
(i_dayweek_goalsAndTasks) references dayweek (i_dayweek_dayweek);

create table schedule(
    s_activity_schedule varchar(50),
    i_period_schedule int not null,
    i_dayweek_schedule int not null
);

create table schedulePeriods (
    i_period_schedulePeriods primary key,
    s_periodDsc_schedulePeriods varchar(50) not null
);

alter table schedule add constraint fk_period_schedule foreign key
(i_period_schedule) references schedulePeriods (i_period_schedulePeriods);

alter table schedule add constraint fk_dayweek_schedule foreign key
(i_dayweek_schedule) references dayweek (i_dayweek_dayweek);

create table contacts (
    i_id_contacts int primary key auto_increment,
    s_nome_contacts varchar(255),
    s_vinculo_contacts varchar(255),
    s_disciplina_contacts varchar(255),
    s_email_contacts varchar(255),
    s_telefone_contacts varchar(255),
    s_site_contacts varchar(255),
    s_instituicao_contacts varchar(255)
);

insert into goalOrTask values (1,"goal");
insert into goalOrTask values (2,"task");

insert into dayweek values (0,"monday");
insert into dayweek values (1,"tuesday");
insert into dayweek values (2,"wednesday");
insert into dayweek values (3,"thursday");
insert into dayweek values (4,"friday");
insert into dayweek values (5,"saturday");
insert into dayweek values (6,"sunday");

insert into schedulePeriods values (1,"07:00 to 08:50");
insert into schedulePeriods values (2,"08:50 to 10:40");
insert into schedulePeriods values (3,"10:40 to 12:30");
insert into schedulePeriods values (4,"12:30 to 13:55");
insert into schedulePeriods values (5,"13:55 to 15:45");
insert into schedulePeriods values (5,"15:45 to 17:35");
insert into schedulePeriods values (7,"17:35 to 19:25");
insert into schedulePeriods values (8,"19:25 to 21:15");
insert into schedulePeriods values (9,"21:15 to 23:05");

insert into schedule values ("Matemática",1,0);;
insert into schedule values ("Matemática",1,1);
insert into schedule values ("Matemática",1,2);
insert into schedule values ("Matemática",1,3);
insert into schedule values ("Matemática",1,4);
insert into schedule values (null,1,5);
insert into schedule values ("Igreja",1,6);

insert into schedule values ("Biologia",2,0);
insert into schedule values (null,2,1);
insert into schedule values ("Biologia",2,2);
insert into schedule values (null,2,3);
insert into schedule values ("Biologia",2,4);
insert into schedule values (null,2,5);
insert into schedule values ("Igreja",2,6);

insert into schedule values ("Monitoria",3,0);
insert into schedule values ("Monitoria",3,1);
insert into schedule values ("Monitoria",3,2);
insert into schedule values ("Monitoria",3,3);
insert into schedule values ("Monitoria",3,4);
insert into schedule values ("Monitoria",3,5);
insert into schedule values (null,3,6);

insert into schedule values ("Almoço",4,0);
insert into schedule values ("Almoço",4,1);
insert into schedule values ("Almoço",4,2);
insert into schedule values ("Almoço",4,3);
insert into schedule values ("Almoço",4,4);
insert into schedule values ("Almoço",4,5);
insert into schedule values ("Mercado",4,6);

insert into schedule values (null,5,0);
insert into schedule values ("Biblioteca",5,1);
insert into schedule values ("Biblioteca",5,2);
insert into schedule values ("Biblioteca",5,3);
insert into schedule values ("Biblioteca",5,4);
insert into schedule values (null,5,5);
insert into schedule values (null,5,6);

insert into schedule values ("Academia",6,0);
insert into schedule values ("Academia",6,1);
insert into schedule values ("Academia",6,2);
insert into schedule values ("Academia",6,3);
insert into schedule values ("Academia",6,4);
insert into schedule values ("Academia",6,5);
insert into schedule values (null,6,6);

insert into schedule values ("Inglês",7,0);
insert into schedule values ("Inglês",7,1);
insert into schedule values ("Inglês",7,2);
insert into schedule values ("Inglês",7,3);
insert into schedule values ("Inglês",7,4);
insert into schedule values ("Inglês",7,5);
insert into schedule values ("Inglês",7,6);

insert into schedule values ("Café e Séries",8,0);
insert into schedule values ("Café e Séries",8,1);
insert into schedule values ("Café e Séries",8,2);
insert into schedule values ("Café e Séries",8,3);
insert into schedule values ("Café e Séries",8,4);
insert into schedule values (null,8,5);
insert into schedule values ("Café e Séries",8,6);

insert into schedule values ("Meditação e Dormir",9,0);
insert into schedule values ("Meditação e Dormir",9,1);
insert into schedule values ("Meditação e Dormir",9,2);
insert into schedule values ("Meditação e Dormir",9,3);
insert into schedule values ("Meditação e Dormir",9,4);
insert into schedule values (null,9,5);
insert into schedule values ("Meditação e Dormir",9,6);

insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Bruno Almeida","Professor","MATA01 - Calculo A","bruno123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","UFBA - Universidade Federal da Bahia");


