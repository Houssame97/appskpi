package com.apps.integrationTests;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.web.util.NestedServletException;

import com.apps.BaseIntegration;
import com.apps.entities.Certification;

@WithUserDetails("med_el")
public class CertificationIntegrationTests extends BaseIntegration{
	    
	    @Test
	    public void getCertifications() throws Exception {
	          
	        mvc.perform(
	        		get("/certifications")
	        			.contentType(MediaType.APPLICATION_JSON)
	        		)
	          		.andExpect(status().isOk())
	          		.andExpect(content()
	          		.contentTypeCompatibleWith(MediaType.APPLICATION_JSON));
	    }
	    
	    @Test
	    public void saveCertification_WhenCertificationValid() throws Exception {
	        Certification certif  = new Certification(null, "Azure CICD", "Microsoft");
	        mvc.perform(
	        		post("/certifications")
	        			.contentType(MediaType.APPLICATION_JSON)
	        			.content(mapper.writeValueAsString(certif))
	        		)
	          		.andExpect(status().isOk())
	          		.andExpect(content()
	          		.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
	                .andExpect(jsonPath("$.intitule", is("Azure CICD")))
	        		.andExpect(jsonPath("$.editeur", is("Microsoft")));
	    }
	    @Test
	    @WithUserDetails("dounia_hm")
	    public void getCertifications_FailsWhenRoleIsNotAllowed() throws Exception {
	          
	        mvc.perform(get("/certifications"))
	          		.andExpect(status().isForbidden());
	    }
	    
	    @Test
		public void failToSave_WhenCertificationInvalid() throws Exception {
			Certification certif = new Certification(null, "", "");
		                    
			 assertThrows(NestedServletException.class, () ->
			    mvc.perform(
			    		post("/certifications")
		        			.contentType(MediaType.APPLICATION_JSON)
		        			.content(mapper.writeValueAsString(certif))
		        		)
			    );
		}

}
