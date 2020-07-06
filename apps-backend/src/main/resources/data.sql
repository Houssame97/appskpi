INSERT INTO login (id_login, updated_on, updated_by, is_actived, username, password) VALUES
  (11, '2020-05-14', '', true, 'dounia_hm', '$2a$10$cEDuSJ47kYoRY4.xSa4rXeG0nt94GV.AAgc49x.IoKwefwQJ.7i0e'),
  (12, '2020-05-14', '', true, 'safae_jm', '$2a$10$WTZoSTHypnu2cv3sCFgL6emHAKShsKcN4oRYRZnICgzC7q9NHeQXC'),
  (13, '2020-05-14', '', true, 'amine_ht', '$2a$10$MC58KICIcChkJKpmPMnZKedA8DDRWVNf1J2UeN.AgIeRqB5ET0UZm'),
  (14, '2020-05-14', '', true, 'med_el', '$2a$10$rlDeU0ewGQ/SpLwmB6CLi.X0jx9vHsMe/G.0E7FJg2bGPi.MXN1rO');
  
INSERT INTO poste (id_poste, updated_on, updated_by, nom_poste, description_poste) VALUES
  (11, '2020-05-14', '', 'Poste 1', 'Architecture et conception des systèmes informatiques'),
  (12, '2020-05-14', '', 'Poste 2', 'Conception et Développement des nouvelles fonctionnalités: JAVA/ANGULAR'),
  (13, '2020-05-14', '', 'Poste 3', 'Accompagnement de l équipe dans la méthodologie Agile et la diffuser dans les rituels, les sprints et les échanges au quotidien');

 INSERT INTO ressource (id_ressource, updated_on, updated_by, nom_ressource, prenom_ressource, matricule, email, telephone, adresse, rate, nbr_annee_dxc, nbr_annee_global, niveau_superiorite, poste_id_poste, login_id_login) VALUES
  (11, '2020-05-14', '', 'hm', 'dounia', 'AA4356','safae@hm.com', '0607425600', 'Salé', 2, 1, 1, 1, 11, 11),
  (12, '2020-05-14', '', 'jm', 'safae', 'J98790', 'safae@hm.com', '0645652320', 'Rabat', 2, 1, 1, 3, 12, 12),
  (13, '2020-05-14', '', 'ht', 'amine', 'AZ90Z0','dounia@hm.com', '062334540', 'Rabat', 2, 1, 1, 1, 12, 13),
  (14, '2020-05-16', '', 'el', 'med', 'AZ90H0','med@el.com', '0623345400', 'Rabat', 2, 1, 1, 4, 13, 14);

INSERT INTO certification (id_certification, updated_on, updated_by, intitule, editeur) VALUES
   (11, '2020-05-14', '', 'AWS Architect', 'SIGMA'),
   (12, '2020-05-14', '', 'ITIL V3', 'SIGMA'),
   (13, '2020-05-14', '', 'Agile Scrum', 'New Skills'),
   (14, '2020-05-16', '', 'Azure cloud', 'Microsoft');
   
/*
INSERT INTO ressource_certification (id_ressource_certification, updated_on, updated_by, certification_id_certification, ressource_id_ressource, annee_obtention, obtenue_a_dxc, niveau_de_maitrise) VALUES
   (1, '2020-05-14', '', 1, 1, 2012, true, 3),
   (2, '2020-05-14', '', 2, 2, 2012, true, 4),
   (3, '2020-05-14', '', 3, 3, 2012, false, 5);
   
INSERT INTO technologie (id_technologie, updated_on, updated_by, nom_technologie) VALUES
  (1, '2020-05-14', '', 'SAP'), 
  (2, '2020-05-14', '', 'SalesForce'), 
  (3, '2020-05-14', '', 'ServiceNow');

INSERT INTO outil (id_outil, updated_on, updated_by, nom_outil, categorie) VALUES
  (1, '2020-05-14', '', 'JIRA', 'Gestion de tickets'),  
  (2, '2020-05-14', '', 'Github', 'Gestion d version');

INSERT INTO industrie (id_industrie, updated_on, updated_by, nom_industrie) VALUES
  (1, '2020-05-14', '', 'industrie 1'), 
  (2, '2020-05-14', '', 'industrie 2');

INSERT INTO type_activite (id_type_activite, updated_on, updated_by, nom_type_activite) VALUES
  (1, '2020-05-14', '', 'activite 1'),  
  (2, '2020-05-14', '', 'activite 2'); 
*/