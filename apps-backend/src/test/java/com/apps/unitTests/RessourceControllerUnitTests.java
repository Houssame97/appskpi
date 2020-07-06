package com.apps.unitTests;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;

import javax.validation.ConstraintViolationException;

import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.web.util.NestedServletException;

import com.apps.BaseUnit;
import com.apps.entities.Audit;
import com.apps.entities.EnumSuperiorite;
import com.apps.entities.Ressource;

public class RessourceControllerUnitTests extends BaseUnit{

	@Test
	public void findAllRessource() throws Exception {

	    given(this.ressourceRepository.findAll())
	            .willReturn(Arrays.asList(
	            		new Ressource(null, new Audit(), "tach", "noussaiba", "ZZ435K","noussaiba@hm.com", "0607925678", "Rabat", 2, 1, 1, EnumSuperiorite.Architecte,null,null, null),
	                    new Ressource(null, new Audit(), "hammi", "dounia", "ZZ090K","dounia@hm.com", "0607924478", "Rabat", 2, 1, 1, EnumSuperiorite.Architecte,null, null,null)));
	                    
	    	mvc.perform(get("/ressources"))
	            .andExpect(status().isOk())
	            .andExpect(content()
	            .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
	            .andExpect(jsonPath("$.length()", is(2)))
	            .andExpect(jsonPath("$.[0].nomRessource", is("tach")))
	    	    .andExpect(jsonPath("$.[0].prenomRessource", is("noussaiba")))
	    	    .andExpect(jsonPath("$.[1].nomRessource", is("hammi")))
	    	    .andExpect(jsonPath("$.[1].prenomRessource", is("dounia")));
	}
	
	@Test
	public void saveRessource_WhenRessourceValid() throws Exception {
		Ressource ressource = new Ressource(null, "fadli", "meriem", "AA334N","meriem@dxc.com", "060799569", "Rabat", 2, 1, 1, EnumSuperiorite.Architecte,null, null, null);
		
	    given(this.ressourceRepository.save(Mockito.any(Ressource.class)))
	            .willReturn(ressource);
	                    
	    mvc.perform(
	    		post("/ressources")
        			.contentType(MediaType.APPLICATION_JSON)
        			.content(mapper.writeValueAsString(ressource))
        		)
          		.andExpect(status().isOk())
          		.andExpect(content()
          		.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.nomRessource", is("fadli")))
        		.andExpect(jsonPath("$.prenomRessource", is("meriem")));
	}
	
    @Test(expected=NestedServletException.class)
	public void failToSave_WhenRessourceInvalid() throws Exception {
    	//téléphone invalide
		Ressource ressource = new Ressource(null, "fadli", "meriem", "AA14N","meriem@dxc.com", "0654326544", "Rabat", 2, 1, 1, EnumSuperiorite.Architecte,null, null, null);
		
	    when(this.ressourceRepository.save(Mockito.any(Ressource.class)))
        .thenThrow(ConstraintViolationException.class);

	    mvc.perform(
	    		post("/ressources")
        			.contentType(MediaType.APPLICATION_JSON)
        			.content(mapper.writeValueAsString(ressource))
        		);
	}
	
	
	@Test
	public void deleteRessource_WhenIdValid() throws Exception {
	    
		long toDelete=3; 

	    this.mvc.perform(delete("/ressources/3"))
	            .andExpect(status().isOk());
        verify(ressourceRepository, times(1)).deleteById(toDelete);
	}


}
