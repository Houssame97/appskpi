package com.apps.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.TypeActivite;
import com.apps.repositories.ITypeActiviteRepositoriy;

@RestController
@RequestMapping("/typesactivites")
@CrossOrigin("*")
public class TypeActiviteController extends GenericRestController<ITypeActiviteRepositoriy, TypeActivite>{

}
