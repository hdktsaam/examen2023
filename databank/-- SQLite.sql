-- SQLite
drop table user;
drop table lessen;

create table user(
    user_id integer PRIMARY KEY ,
    userName text NOT NULL
);

create table lessen(
    lessen_id integer PRIMARY KEY ,
    user_id integer NOT NULL,
    omschrijvingKort text not null,
    omschrijvingLang text not null,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

insert into user (userName) values ("Karel");
insert into user (userName) values ("Els");
insert into user (userName) values ("Peter");

insert into lessen (user_id, omschrijvingKort, omschrijvingLang)
VALUES
(1,'NodeJS','Opstart NodeJS'),
(1,'HTML','Opstart HTML'),
(2,'NodeJS server','Express met NodeJS'),
(3,'API','API basics'),
(3,'API','API opzet + express'),
(3,'DOM','combinatie DOM met API');