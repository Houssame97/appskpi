package com.apps.integrationTests;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;

import com.apps.BaseIntegration;
import com.apps.entities.EnumSuperiorite;
import com.apps.entities.Ressource;

@WithUserDetails("med_el")
public class RessourceIntegrationTests extends BaseIntegration{
	    @Test
	    public void getRessources() throws Exception {
	          
	        mvc.perform(
	        		get("/ressources")
	        			.contentType(MediaType.APPLICATION_JSON)
	        		)
	          		.andExpect(status().isOk())
	          		.andExpect(content()
	          		.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
		            .andExpect(jsonPath("$.length()", is(4)));
	       
	    }
	    
	    @Test
	    @WithUserDetails("dounia_hm")
	    public void getRessources_FailsWhenRoleIsNotAllowed() throws Exception {
	          
	        mvc.perform(get("/ressources"))
	          		.andExpect(status().isForbidden());
	    }
	    
	    @Test
	    public void saveRessource_WhenRessourceValid() throws Exception {
	        Ressource ressource  = new Ressource(null, "ait", "salwa", "EEEEE","salwa@dxc.com", "0623305478", "Rabat", 2, 1, 1, EnumSuperiorite.Architecte,null, null, null);
	        mvc.perform(
	        		post("/ressources")
	        			.contentType(MediaType.APPLICATION_JSON)
	        			.content(mapper.writeValueAsString(ressource))
	        		)
	          		.andExpect(status().isOk())
	          		.andExpect(content()
	          		.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
	                .andExpect(jsonPath("$.nomRessource", is("ait")))
	        		.andExpect(jsonPath("$.prenomRessource", is("salwa")))
    				.andExpect(jsonPath("$.matricule", is("EEEEE")))
    				.andExpect(jsonPath("$.telephone", is("0623305478")))
					.andExpect(jsonPath("$.adresse", is("Rabat")))
					.andExpect(jsonPath("$.email", is("salwa@dxc.com")));
	    }
	    
	    @Test
	    public void getRessourcesByPosteId_WhenPosteIdValid() throws Exception {
	          
	        mvc.perform(
	        		get("/ressources/poste/11")
	        			.contentType(MediaType.APPLICATION_JSON)
	        		)
	          		.andExpect(status().isOk())
	          		.andExpect(content()
	          		.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
	          		.andExpect(jsonPath("$.length()", is(1)))
	          		.andExpect(jsonPath("$.[0].idRessource", is(11)))
	          		.andExpect(jsonPath("$.[0].nomRessource", is("hm")))
	        		.andExpect(jsonPath("$.[0].prenomRessource", is("dounia")));
	    }  
}
