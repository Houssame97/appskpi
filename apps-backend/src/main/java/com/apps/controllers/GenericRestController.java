package com.apps.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class GenericRestController<A extends JpaRepository<B,Long> ,B> {

	@Autowired
	private A dao;

	@RequestMapping(method = RequestMethod.GET)
	public List<B> list() {
		return dao.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public B create(@RequestBody B entity) { 
		return (B) dao.save(entity);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.PUT)
	public B update(@PathVariable(value = "id") Long id, @RequestBody B entity) { 
		return (B) dao.save(entity); 
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable(value = "id") Long id) { 
		dao.deleteById(id); 
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public B get(@PathVariable(value = "id") Long id) {
		return (B) dao.findById(id);
	}
}