package com.apps.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.apps.entities.Login;
import com.apps.entities.Ressource;
import com.apps.repositories.ILoginRepository;
import com.apps.repositories.IRessourceRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	private ILoginRepository loginRepository;
	@Autowired
	private IRessourceRepository ressourceRepository;

	public UserDetailsServiceImpl(ILoginRepository loginRepository) {
		this.loginRepository = loginRepository;
	}

    // Search user data in database by username
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	Login login = loginRepository.findByUsername(username);
    	Ressource ressource = ressourceRepository.findByLoginUsername(username);
    	System.out.println(ressource);
    	
        if(login == null)
        	throw new UsernameNotFoundException("invalid username");
        
        /** Get user roles **/
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(ressource.getNiveau_superiorite()+""));

        return new User(login.getUsername(), login.getPassword(), authorities);
    }
}
