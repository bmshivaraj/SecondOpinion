package org.shivaraj.project.controller;


import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.shivaraj.project.dao.JwtUserDetailsService;


import org.shivaraj.project.jwtTokenUtil.JwtTokenUtil;
import org.shivaraj.project.model.RegUser;
import org.shivaraj.project.model.JwtRequest;
import org.shivaraj.project.model.JwtResponse;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class JwtAuthenticationController {

	
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	

	@CrossOrigin
	@RequestMapping(value = "/register", method = RequestMethod.POST, consumes={"application/json"})
	public ResponseEntity<?> saveUser(@RequestBody RegUser regUser) throws Exception {
		
		String username = regUser.getUsername();
		String password = regUser.getPassword();
		String email = regUser.getEmail();
		
		RegUser user = new RegUser();
		user.setUsername(username);
		user.setPassword(password);
		user.setEmail(email);
		
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	//@CrossOrigin(origins = {"http://localhost:4200"})
	@CrossOrigin
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
	@CrossOrigin
	@RequestMapping(value = "/regUsers", method = RequestMethod.GET)
	public  List<RegUser> getAllRegUsers()
	{
		return userDetailsService.getAllRegUsers();
	}
	
}