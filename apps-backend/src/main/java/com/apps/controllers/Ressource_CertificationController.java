package com.apps.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Ressource_Certification;
import com.apps.repositories.IRessource_CertificationRepository;

@RestController
@RequestMapping("/ressource_certifications")
@CrossOrigin("*")
public class Ressource_CertificationController extends GenericRestController<IRessource_CertificationRepository, Ressource_Certification>{
	@Autowired
	IRessource_CertificationRepository ressourceCertificationRepo;
	@RequestMapping(value = "certified/{idCertification}", method = RequestMethod.GET)
	public Collection<Ressource_Certification> findByIdCertification(@PathVariable(value = "idCertification") Long idCertification) {
		return ressourceCertificationRepo.findByCertificationId(idCertification);
	}
	
	@RequestMapping(value = "certifications/{idRessource}", method = RequestMethod.GET)
	public Collection<Ressource_Certification> findByIdRessource(@PathVariable(value = "idRessource") Long idRessource) {
		return ressourceCertificationRepo.findByRessourceId(idRessource);
	}
}
