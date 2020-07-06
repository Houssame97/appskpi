package com.apps.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.TypeFacturation;
import com.apps.repositories.ITypeFacturationRepository;

@RestController
@RequestMapping("/typesfacturations")
@CrossOrigin("*")
public class TypeFacturationController extends GenericRestController<ITypeFacturationRepository, TypeFacturation>{

}
