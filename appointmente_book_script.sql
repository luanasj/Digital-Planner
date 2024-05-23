create schema appointmentBook;

use appointmentBook;

create table goalsAndTasks(
    i_id_goalsAndTasks int primary key auto_increment,
    s_description_goalsAndTasks varchar(255) not null,
    i_type_goalsAndTasks int not null,
    b_accomplished_goalsAndTasks boolean not null,
    d_date_goalsAndTasks date not null,
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
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");
insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values ("Lorem Ipsum","adipisci velit","dolor sit amet","lorem123@outlook.com.br","999999999","www.randomurl.com/lorem/ipsum","uisquam est qui dolorem ipsum");

-- select CURDATE(); /*data atual*/

-- select weekday(curdate()); /*dia da semana da data atual*/

-- select SUBDATE(CURDATE(), interval weekday(curdate()) day); /*segunda da semana*/

-- select DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 1 DAY); /*terça-feira da semana*/

-- select DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 2 DAY); /*quarta-feira da semana*/

-- select DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 3 DAY); /*quinta-feira da semana*/

-- select DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 4 DAY); /*sexta-feira da semana*/

-- select DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 5 DAY); /*sábado da semana*/

-- select DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 6 DAY); /*domingo da semana*/

/*insert goals*/

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Lorem ipsum dolor",1,false,curdate(),(weekday(curdate())));
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("sit amet",1,true,curdate(),(weekday(curdate())));
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ( "consectetur adipiscing elit",1,false,curdate(),(weekday(curdate())));
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Aliquam leo mauris",1,false,curdate(),(weekday(curdate())));

/*insert task monday*/

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("vehicula nec erat",2,false,(SUBDATE(CURDATE(), interval weekday(curdate()) day)),0);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("volutpat, volutpat",2,false,(SUBDATE(CURDATE(), interval weekday(curdate()) day)),0);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("consectetur leo",2,false,(SUBDATE(CURDATE(), interval weekday(curdate()) day)),0);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Nulla facilisi",2,false,(SUBDATE(CURDATE(), interval weekday(curdate()) day)),0);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks)
values (" Vestibulum purus ipsum",2,false,(SUBDATE(CURDATE(), interval weekday(curdate()) day)),0);

/*insert task tuesday*/

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("varius sed eros quis",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 1 DAY)),1);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("tempus porttitor diam",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 1 DAY)),1);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Aliquam tempor",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 1 DAY)),1);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("sapien quis lectus",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 1 DAY)),1);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("sodales ornare",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 1 DAY)),1);

/*insert task wednesday*/

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Nulla sit amet",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 2 DAY)),2);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("maximus nulla",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 2 DAY)),2);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("sed suscipit velit",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 2 DAY)),2);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Curabitur condimentum",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 2 DAY)),2);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("nibh dolor",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 2 DAY)),2);

/*insert task thursday*/

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("ac blandit eros",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 3 DAY)),3);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("malesuada nec",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 3 DAY)),3);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Vestibulum quis",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 3 DAY)),3);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("metus facilisis",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 3 DAY)),3);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("suscipit risus ac",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 3 DAY)),3);

/*insert task friday*/

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("venenatis tortor",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 4 DAY)),4);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Donec dapibus",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 4 DAY)),4);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("vehicula magna",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 4 DAY)),4);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("at tincidunt nulla",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 4 DAY)),4);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("vulputate vel",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 4 DAY)),4);

/*insert task saturday*/

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Ut et arcu quis",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 5 DAY)),5);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("turpis maximus",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 5 DAY)),5);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("consectetur nec et dui",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 5 DAY)),5);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("In pharetra",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 5 DAY)),5);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("ultrices viverra",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 5 DAY)),5);

/*insert task sunday*/

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("Praesent feugiat",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 6 DAY)),6);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("lorem id tempus",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 6 DAY)),6);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("ex lorem",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 6 DAY)),6);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values (" auctor ligula",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 6 DAY)),6);
insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values ("nec scelerisque",2,false,(DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 6 DAY)),6);

/*select goals and tasks*/

select * from goalsAndTasks 
where 
    i_type_goalsAndTasks = 1 or
    d_date_goalsAndTasks between SUBDATE(CURDATE(), interval weekday(curdate()) day) and DATE_ADD((SUBDATE(CURDATE(), interval weekday(curdate()) day)),INTERVAL 6 DAY);

/*select goals ans tasks as a stored procedure*/

delimiter $$

create procedure goalsAnsTasksSelect(in date1 date,in date2 date)
begin 

select * from goalsAndTasks
where i_type_goalsAndTasks = 1 or
d_date_goalsAndTasks between date1 and date2;

end $$

delimiter ;

/*insert goals and tasks as a procedure*/

delimiter $$

create procedure goalsAndTasksInsert(in descript varchar(255),in typenum int,in accomplished boolean,in dt date)
begin 

insert into goalsAndTasks (s_description_goalsAndTasks,i_type_goalsAndTasks,b_accomplished_goalsAndTasks,b_accomplished_goalsAndTasks,d_creation_goalsAndTasks,i_dayweek_goalsAndTasks) 
values (descript,typenum,accomplished,dt,weekday(dt));

end $$
delimiter ;


/*update goals and tasks*/

update goalsAndTasks set s_description_goalsAndTasks = /*<nova string>*/
where i_id_goalsAndTasks = /*id*/;

update goalsAndTasks set b_accomplished_goalsAndTasks = /*true or false*/
where i_id_goalsAndTasks = /*id*/;

/*update goals and tasks as a procedure*/

delimiter $$

create procedure goalsAndTasksUpdate(in campo varchar(50), in entrada sql_variant, in id int)
begin

if(campo = "description")then
    update goalsAndTasks set s_description_goalsAndTasks = entrada
    where i_id_goalsAndTasks = id;
else
    update goalsAndTasks set b_accomplished_goalsAndTasks = entrada
    where i_id_goalsAndTasks = id;
end if;

end $$

delimiter;


/*delete goalsAndTasks as a procedure*/

delimiter $$

create procedure goalsAndTasksDelete(in id int)
begin

delete from goalsAndTasks where i_id_goalsAndTasks = id;

end $$
delimiter ;

/*select schedule*/

select * from schedule;

/*update schedule as a procedure*/

delimiter $$

create procedure scheduleUpdate(in newActivity varchar(255), in dayweek int, in scperiod int)
begin

update schedule set s_activity_schedule = newActivity
where 
    i_dayweek_schedule = dayweek and
    i_period_schedule = scperiod;

end $$
delimiter ; 

/*select contacts*/

select * from contacts; 

/*insert contacts*/

delimiter $$

create procedure insertContacts(in nomectt varchar(255),in vinculo varchar(255),in disciplina varchar(255),in email varchar(255),in telefone varchar(255),in sitectt varchar(255),in instituicao varchar(255))
begin

end $$
    insert into contacts (s_nome_contacts,s_vinculo_contacts,s_disciplina_contacts,s_email_contacts,s_telefone_contacts,s_site_contacts,s_instituicao_contacts)
values (nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao);
delimiter ;





/*update contacts as a procedure*/

delimiter $$

create procedure contactsUpdate(in id int,in nomectt varchar(255),in vinculo varchar(255),in disciplina varchar(255),in email varchar(255),in telefone varchar(255),in sitectt varchar(255),in instituicao varchar(255))
begin
    update contacts set s_nome_contacts = nomectt,
        s_vinculo_contacts = vinculo,
        s_disciplina_contacts = disciplina,
        s_email_contacts = email,
        s_telefone_contacts = telefone,
        s_site_contacts = sitectt,
        s_instituicao_contacts = intituicao;
    where i_id_contacts = id
end $$
delimiter ;

/*delete contacts as a procedure*/

delimiter $$

create procedure contactsDelete(in id int)
begin

delete from contacts where i_id_contacts = id;

end $$
delimiter ;

