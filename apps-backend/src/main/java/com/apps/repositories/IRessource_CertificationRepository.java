package com.apps.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apps.entities.Ressource_Certification;

public interface IRessource_CertificationRepository extends JpaRepository<Ressource_Certification, Long>{
	@Query("select rc from Ressource_Certification rc where rc.certification.idCertification=:idCertification")
	public Collection<Ressource_Certification>findByCertificationId(@Param("idCertification") Long idCertification);
	
	@Query("select rc from Ressource_Certification rc where rc.ressource.idRessource=:idRessource")
	public Collection<Ressource_Certification>findByRessourceId(@Param("idRessource") Long idRessource);
}
