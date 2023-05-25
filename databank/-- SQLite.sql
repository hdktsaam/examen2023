-- SQLite
drop table user;
drop table lessen;
drop table rating;

-- userType ==> 0 = lesgever / 1 = student
create table user(
    user_id integer PRIMARY KEY ,
    userName text NOT NULL,
    userType integer NOT NULL DEFAULT 0
);

create table lessen(
    lessen_id integer PRIMARY KEY ,
    user_id integer NOT NULL,
    omschrijvingKort text not null,
    omschrijvingLang text not null,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

create table rating(
    rating_id integer PRIMARY KEY,
    user_id integer NOT NULL,
    lessen_id integer NOT NULL,
    AantalSterren integer NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (lessen_id) REFERENCES lessen(lessen_id)
);

insert into user (userName) values ("Karel");
insert into user (userName) values ("Els");
insert into user (userName) values ("Peter");
insert into user (userName,userType) values ("Piet",1);
insert into user (userName,userType) values ("Stef",1);

insert into lessen (user_id, omschrijvingKort, omschrijvingLang)
VALUES
(1,'NodeJS','Opstart NodeJS'),
(1,'HTML','Opstart HTML'),
(2,'NodeJS server','Express met NodeJS'),
(3,'API','API basics'),
(3,'API','API opzet + express'),
(3,'DOM','combinatie DOM met API');

insert into rating (user_id, lessen_id, AantalSterren) values (4,2,5), (5,1,3), (5,4,4);