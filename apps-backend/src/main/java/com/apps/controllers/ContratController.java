package com.apps.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Contrat;
import com.apps.repositories.IContratRepository;

@RestController
@RequestMapping("/contrats")
@CrossOrigin("*")
public class ContratController extends GenericRestController<IContratRepository, Contrat>{
	@Autowired
	IContratRepository contratRepo;
	@RequestMapping(value = "typefacturation/{idTypeFacturation}", method = RequestMethod.GET)
	public Collection<Contrat> findByIdTypeFacturation(@PathVariable(value = "idTypeFacturation") Long idTypeFacturation) {
		return contratRepo.findByTypeFacturationId(idTypeFacturation);
	}
	@RequestMapping(value = "typeactivite/{idTypeActivite}", method = RequestMethod.GET)
	public Collection<Contrat> findByIdTypeActivite(@PathVariable(value = "idTypeActivite") Long idTypeActivite) {
		return contratRepo.findByTypeActiviteId(idTypeActivite);
	}
	@RequestMapping(value = "client/{idClient}", method = RequestMethod.GET)
	public Collection<Contrat> findByIdClient(@PathVariable(value = "idClient") Long idClient) {
		return contratRepo.findByClientId(idClient);
	}
}
