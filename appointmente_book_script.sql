create schema appointmentBook;

use appointmentBook;

create table goalsAndTasks(
    i_id_goalsAndTasks int primary key auto_increment,
    s_description_goalsAndTasks varchar(255) not null,
    i_type_goalsAndTasks int not null,
    b_accomplished_goalsAndTasks boolean not null,
    d_creation_goalAndTasks date not null

);

create table goalOrTask (
    i_goalOrTask_goalOrTask int primary key auto_increment,
    s_dsc_goalOrTask varchar(50) not null
);

alter table goalsAndTasks add constraint fk_type_goalsAndTasks foreign key 
(i_type_goalsAndTasks) references goalOrTask (i_goalOrTask_goalOrTask);