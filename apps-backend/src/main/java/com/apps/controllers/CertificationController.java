package com.apps.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apps.entities.Certification;
import com.apps.repositories.ICertificationRepository;

@RestController
@RequestMapping("/certifications")
@CrossOrigin("*")
public class CertificationController extends GenericRestController<ICertificationRepository, Certification>{	
	
}
