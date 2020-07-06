package com.apps.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apps.entities.Contrat;

public interface IContratRepository extends JpaRepository<Contrat, Long>{
	@Query("select c from Contrat c where c.typeActivite.idTypeActivite=:idTypeActivite")
    public Collection<Contrat> findByTypeActiviteId(@Param("idTypeActivite") Long idTypeActivite);
    
    @Query("select c from Contrat c where c.typeFacturation.idTypeFacturation=:idTypeFacturation")
    public Collection<Contrat> findByTypeFacturationId(@Param("idTypeFacturation") Long idTypeFacturation);
    
    @Query("select c from Contrat c where c.client.idClient=:idClient")
	public Collection<Contrat> findByClientId(@Param("idClient") Long idClient);
}
