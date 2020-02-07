package org.shivaraj.project.dao;


import java.util.ArrayList;
import java.util.List;

import org.shivaraj.project.model.RegUser;
import org.shivaraj.project.model.RegUserRepository;
import org.shivaraj.project.model.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	
	@Autowired
	private RegUserRepository regUserRepositoy;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		if ("javainuse".equals(	)) {
//			return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
//					new ArrayList<>());
//		} else {
//			throw new UsernameNotFoundException("User not found with username: " + username);
//		}
		
		RegUser user = regUserRepositoy.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	
	public RegUser save(RegUser user) {
		RegUser newUser = new RegUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setEmail(user.getEmail());
		return regUserRepositoy.save(newUser);
	}
	
	public List<RegUser> getAllRegUsers()
	{
		
				
		List<RegUser> regUsers = new ArrayList<>();
		regUserRepositoy.findAll().forEach(regUsers::add);
		return regUsers;
	}
	
	
	
}