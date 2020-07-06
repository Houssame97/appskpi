package com.apps.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Client;
import com.apps.repositories.IClientRepository;

@RestController
@RequestMapping("/clients")
@CrossOrigin("*")
public class ClientController extends GenericRestController<IClientRepository, Client>{
	@Autowired
	IClientRepository clientRepo;
	@RequestMapping(value = "industrie/{idIndustrie}", method = RequestMethod.GET)
	public Collection<Client> findByIdIndustrie(@PathVariable(value = "idIndustrie") Long idIndustrie) {
		return clientRepo.findByIndustrieId(idIndustrie);
	}
}
