package com.apps.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apps.entities.TypeFacturation;

public interface ITypeFacturationRepository extends JpaRepository<TypeFacturation, Long> {

}