package com.apps.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import com.apps.entities.Login;

public interface ILoginRepository extends JpaRepository<Login, Long>{
	public Login findByUsername(@Param("username") String username);

}
