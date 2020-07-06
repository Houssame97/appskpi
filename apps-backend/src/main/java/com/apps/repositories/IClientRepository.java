package com.apps.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apps.entities.Client;

public interface IClientRepository extends JpaRepository<Client, Long>{
	@Query("select c from Client c where c.industrie.idIndustrie=:idIndustrie")
	public Collection<Client> findByIndustrieId(@Param("idIndustrie") Long idIndustrie);
}
