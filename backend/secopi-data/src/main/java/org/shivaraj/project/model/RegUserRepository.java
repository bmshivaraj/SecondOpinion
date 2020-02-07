package org.shivaraj.project.model;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import org.shivaraj.project.model.RegUser;

@Repository
public interface RegUserRepository extends CrudRepository<RegUser, Integer> {
	
	RegUser findByUsername(String username);
	
}