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
