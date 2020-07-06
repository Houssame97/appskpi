package com.apps;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.apps.entities.Audit;
import com.apps.entities.Capabilite;
import com.apps.entities.Certification;
import com.apps.entities.EnumSuperiorite;
import com.apps.entities.Industrie;
import com.apps.entities.Login;
import com.apps.entities.Outil;
import com.apps.entities.Poste;
import com.apps.entities.Ressource;
import com.apps.entities.Ressource_Certification;
import com.apps.entities.Technologie;
import com.apps.entities.TypeActivite;
import com.apps.repositories.ICapabiliteRepository;
import com.apps.repositories.ICertificationRepository;
import com.apps.repositories.IIndustrieRepository;
import com.apps.repositories.ILoginRepository;
import com.apps.repositories.IOutilRepository;
import com.apps.repositories.IPosteRepository;
import com.apps.repositories.IRessourceRepository;
import com.apps.repositories.IRessource_CertificationRepository;
import com.apps.repositories.ITechnologieRepository;
import com.apps.repositories.ITypeActiviteRepositoriy;

@SpringBootApplication
public class AppsBackendApplication  implements CommandLineRunner{
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Autowired IRessourceRepository ressourceRepo;
	@Autowired IRessource_CertificationRepository ressourceCertificationRepo;
	@Autowired ICertificationRepository certificationRepo;
	@Autowired IPosteRepository posteRepo;
	@Autowired ITechnologieRepository technologieRepo;
	@Autowired IOutilRepository outilRepo;
	@Autowired IIndustrieRepository industrieRepo;
	@Autowired ITypeActiviteRepositoriy typeActiviteRepo;
	@Autowired ILoginRepository loginRepository;
	@Autowired ICapabiliteRepository capaRepo;
	@Autowired Environment env;
	
	public static void main(String[] args) {
			SpringApplication.run(AppsBackendApplication.class, args);
	}
	
	@Override
	public void run(String... strings) throws Exception {
		if (!Arrays.asList(env.getActiveProfiles()).contains("test")) {
		// Postes
		Poste poste1 = new Poste((long)1, new Audit(),"Architect", "Architecture et conception des systèmes informatiques");
		Poste poste2 = new Poste((long)2, new Audit(),"Software Engineer", "Conception et Développement des nouvelles fonctionnalités: JAVA/ANGULAR");
		Poste poste3 = new Poste((long)3, new Audit(),"Administration Base de données", "accompagnement de l'équipe dans la méthodologie Agile et la diffuser dans les rituels, les sprints et les échanges au quotidien.");
		posteRepo.save(poste1);
		posteRepo.save(poste2);
		posteRepo.save(poste3);
		
		// Ressources
		Ressource ress1 = new Ressource((long)1, new Audit(), "hm", "dounia", "AZ90Z","dounia@dxc.com", "0807654532", "Rabat", 2, 1, 1, EnumSuperiorite.Architecte,poste1, null, null);
		Ressource ress2 = new Ressource((long)2, new Audit(), "jm", "safae", "AA4356","safae@dxc.com", "0607425644", "Salé", 2, 1, 1, EnumSuperiorite.DL,poste2, null, null);
		Ressource ress3 = new Ressource((long)3, new Audit(), "ht", "amine", "J9879","amine@dxc.com", "0645652323", "Rabat", 2, 1, 1, EnumSuperiorite.CM,poste3, null, null);
		Ressource ress4 = new Ressource((long)4, new Audit(), "el", "mohammed", "M65K43","mohammed@dxc.com", "0675345632", "Rabat", 2, 1, 1, EnumSuperiorite.DSL,poste3, null, null);
		ressourceRepo.save(ress1);
		ressourceRepo.save(ress2); 
		ressourceRepo.save(ress3);
		ressourceRepo.save(ress4);
		
		//Login
		Login login = new Login((long)1, "dounia_hm", bCryptPasswordEncoder().encode("dounia123"), true);
		Login login2 = new Login((long)2, "safae_jm", bCryptPasswordEncoder().encode("safae123"), true);
		Login login3 = new Login((long)3, "amine_ht", bCryptPasswordEncoder().encode("amine123"), true);
		Login login4 = new Login((long)4, "med_el", bCryptPasswordEncoder().encode("med123"), true);
		Login login5 = new Login((long)5, "houss", bCryptPasswordEncoder().encode("houss123"), true);
		loginRepository.save(login);
		loginRepository.save(login2);
		loginRepository.save(login3);
		loginRepository.save(login4);
		loginRepository.save(login5);
		
		//Update ressourcess
		ress1.setLogin(login);
		ressourceRepo.save(ress1);
		ress2.setLogin(login2);
		ressourceRepo.save(ress2);
		ress3.setLogin(login3);
		ressourceRepo.save(ress3);
		ress4.setLogin(login5);
		ressourceRepo.save(ress4);
		
		// Cerfications
		Certification certif = new Certification((long)1, new Audit(), "AWS Architect", "SIGMA");
		Certification certif1 = new Certification((long)2,new Audit(), "ITIL V3", "SIGMA");
		Certification certif2 = new Certification((long)3, new Audit(), "Agile Scrum", "New Skills");
		certificationRepo.save(certif);
		certificationRepo.save(certif1);
		certificationRepo.save(certif2);
		
		//Technologies
		Technologie tech1 = new Technologie((long)1, new Audit(), "SAP");
		Technologie tech2 = new Technologie((long)2, new Audit(), "SalesForce");
		Technologie tech3 = new Technologie((long)3, new Audit(), "ServiceNow");
		technologieRepo.save(tech1);
		technologieRepo.save(tech2);
		technologieRepo.save(tech3);
		
		//Outils
		Outil outil1 = new Outil((long)1, new Audit(), "JIRA", "gestion des tickets");
		Outil outil2 = new Outil((long)2, new Audit(), "Github", "gestion des versions");
		outilRepo.save(outil1);
		outilRepo.save(outil2);
		
		Outil outil3 = new Outil((long)3, new Audit(), "JIRAv", "gestion des tickets");
		Outil outil4 = new Outil((long)4, new Audit(), "Githubv", "gestion des versions");
		outilRepo.save(outil3);
		outilRepo.save(outil4);
		
		Outil outil6 = new Outil((long)5, new Audit(), "JIRAc", "gestion des tickets");
		Outil outil5 = new Outil((long)6, new Audit(), "Githubc", "gestion des versions");
		outilRepo.save(outil5);
		outilRepo.save(outil6);
		
		Outil outil7 = new Outil((long)7, new Audit(), "JIRAe", "gestion des tickets");
		Outil outil8 = new Outil((long)8, new Audit(), "Githube", "gestion des versions");
		outilRepo.save(outil7);
		outilRepo.save(outil8);
		
		Outil outil10 = new Outil((long)9, new Audit(), "JIRAz", "gestion des tickets");
		Outil outil9 = new Outil((long)10, new Audit(), "Githubz", "gestion des versions");
		outilRepo.save(outil10);
		outilRepo.save(outil9);
		
		Outil outil11 = new Outil((long)11, new Audit(), "JIRAa", "gestion des tickets");
		Outil outil12 = new Outil((long)12, new Audit(), "Githuba", "gestion des versions");
		outilRepo.save(outil11);
		outilRepo.save(outil12);
		
		
		
		// Ressource_Certification
		Ressource_Certification rescert = new Ressource_Certification((long)1, new Audit(),certif, ress1, 2012, true, 3);
		Ressource_Certification rescert2 = new Ressource_Certification((long)2, new Audit(),certif2, ress3, 2012, true, 4);
		Ressource_Certification rescert3 = new Ressource_Certification((long)3, new Audit(),certif1, ress2, 2012, false, 5);
		ressourceCertificationRepo.save(rescert);
		ressourceCertificationRepo.save(rescert2);
		ressourceCertificationRepo.save(rescert3);
		
		//Industries
		Industrie industrie1 = new Industrie((long)1, new Audit(), "Industrie 1");
		Industrie industrie2 = new Industrie((long)2, new Audit(), "Industrie 2");
		Industrie industrie3 = new Industrie((long)3, new Audit(), "Industrie 3");
		industrieRepo.save(industrie1);
		industrieRepo.save(industrie2);
		industrieRepo.save(industrie3);
		
		//Types Activite
		TypeActivite activite1 = new TypeActivite((long)1, new Audit(), "activite 1");
		TypeActivite activite2 = new TypeActivite((long)2, new Audit(), "activite 2");
		TypeActivite activite3 = new TypeActivite((long)3, new Audit(), "activite 3");
		typeActiviteRepo.save(activite1);
		typeActiviteRepo.save(activite2);
		typeActiviteRepo.save(activite3);
		
		//Capabilites
		Capabilite capa1 = new Capabilite((long)1, new Audit(), "Capabilite 1", "description de la capabilité 1");
		Capabilite capa2 = new Capabilite((long)2, new Audit(), "Capabilite 2", "description de la capabilité 2");
		Capabilite capa3 = new Capabilite((long)3, new Audit(), "Capabilite 3", "description de la capabilité 3");
		capaRepo.save(capa1);
		capaRepo.save(capa2);
		capaRepo.save(capa3);
		}
	}
}
