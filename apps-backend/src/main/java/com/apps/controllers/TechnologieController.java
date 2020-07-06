package com.apps.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Technologie;
import com.apps.repositories.ITechnologieRepository;

@RestController
@RequestMapping("/technologies")
@CrossOrigin("*")
public class TechnologieController extends GenericRestController<ITechnologieRepository, Technologie>{
	
}
