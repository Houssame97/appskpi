package com.apps.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apps.entities.Certification;

public interface ICertificationRepository extends JpaRepository<Certification, Long>{
	
}
