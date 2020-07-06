package com.apps.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Outil;
import com.apps.repositories.IOutilRepository;

@RestController
@RequestMapping("/outils")
@CrossOrigin("*")
public class OutilController extends GenericRestController<IOutilRepository, Outil>{

}
