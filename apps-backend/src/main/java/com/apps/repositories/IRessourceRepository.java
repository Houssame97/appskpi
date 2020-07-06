package com.apps.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apps.entities.Ressource;

public interface IRessourceRepository extends JpaRepository<Ressource, Long>{
	@Query("select r from Ressource r where r.poste.idPoste=:idPoste")
	public Collection<Ressource> findByPosteId(@Param("idPoste") Long idPoste);
	@Query("select r from Ressource r where r.login.username=:username")
	public Ressource findByLoginUsername(@Param("username") String username);
}
