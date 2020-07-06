package com.apps.security;

import com.apps.entities.Login;
import com.apps.entities.Ressource;
import com.apps.repositories.IRessourceRepository;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	 private AuthenticationManager authenticationManager;
	 private IRessourceRepository ressourceRepository;
	 
	 public JWTAuthenticationFilter(AuthenticationManager authenticationManager, IRessourceRepository ressourceRepository) {
       this.authenticationManager = authenticationManager;
       this.ressourceRepository = ressourceRepository;
       //setFilterProcessesUrl("/login");
	 }

    //analysz user credentials and parse them to authenticationManager
	 @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            Login login = new ObjectMapper().readValue(request.getInputStream(), Login.class);
            System.out.println("LOGIN: "+ login.getUsername());
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword()));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    } 

    // Generate JWT for user after being correctly loged in
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain, Authentication authResult) throws IOException, ServletException {
        User user = (User)authResult.getPrincipal(); //Get authenticated user
        
        /** Get roles **/
        List<String> roles = new ArrayList<>();
        authResult.getAuthorities().forEach(a->{
            roles.add(a.getAuthority());
        });
        
        /** Get user info = [id, prenom, nom, poste] **/
    	Ressource ressource = ressourceRepository.findByLoginUsername(user.getUsername());
    	String[] info = {ressource.getIdRessource()+"", ressource.getPrenomRessource(), ressource.getNomRessource(), ressource.getPoste().getNomPoste()};

        String jwt= JWT.create()
                .withIssuer(request.getRequestURI())
                .withSubject(user.getUsername())
                .withArrayClaim("roles", roles.toArray(new String[roles.size()])) 
                .withArrayClaim("user", info)
                .withExpiresAt(new Date(System.currentTimeMillis() + SecurityParams.EXPIRATION))
                .sign(Algorithm.HMAC256(SecurityParams.SECRET));
        response.addHeader(SecurityParams.JWT_HEADER_NAME, jwt);
        System.out.println("Created JWT: " + jwt);
    }

}
