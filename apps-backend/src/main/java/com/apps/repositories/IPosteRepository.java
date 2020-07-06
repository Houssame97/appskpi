package com.apps.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apps.entities.Poste;

public interface IPosteRepository extends JpaRepository<Poste, Long>{

}
