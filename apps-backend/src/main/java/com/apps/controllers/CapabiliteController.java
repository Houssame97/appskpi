package com.apps.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Capabilite;
import com.apps.repositories.ICapabiliteRepository;

@RestController
@RequestMapping("/capabilites")
@CrossOrigin("*")
public class CapabiliteController extends GenericRestController<ICapabiliteRepository, Capabilite>{

}
