package com.apps.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Ressource;
import com.apps.repositories.IRessourceRepository;

@RestController
@RequestMapping("/ressources")
@CrossOrigin("*")
public class RessourceController extends GenericRestController<IRessourceRepository, Ressource>{
	@Autowired
	IRessourceRepository ressourceRepo;
	@RequestMapping(value = "poste/{idPoste}", method = RequestMethod.GET)
	public Collection<Ressource> findByIdPoste(@PathVariable(value = "idPoste") Long idPoste) {
		return ressourceRepo.findByPosteId(idPoste);
	}
}
