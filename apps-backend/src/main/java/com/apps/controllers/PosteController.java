package com.apps.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Poste;
import com.apps.repositories.IPosteRepository;

@RestController
@RequestMapping("/postes")
@CrossOrigin("*")
public class PosteController extends GenericRestController<IPosteRepository, Poste>{
}