package com.apps.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Industrie;
import com.apps.repositories.IIndustrieRepository;

@RestController
@RequestMapping("/industries")
@CrossOrigin("*")
public class IndustrieController extends GenericRestController<IIndustrieRepository, Industrie>{

}
