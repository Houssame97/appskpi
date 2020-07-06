package com.apps.unitTests;

import static org.hamcrest.CoreMatchers.is;

import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.web.util.NestedServletException;

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

import com.apps.BaseUnit;
import com.apps.entities.Audit;
import com.apps.entities.Certification;

public class CertificationControllerUnitTests extends BaseUnit{

	@Test
	public void findAllCertifications() throws Exception {

	    given(this.certificationRepository.findAll())
	            .willReturn(Arrays.asList(
	            		new Certification((long)1,new Audit(), "AWS Architect", "SIGMA"),
	                    new Certification((long)2,new Audit(), "ITIL V3", "SIGMA")));
	                    
	    	mvc.perform(get("/certifications"))
	            .andExpect(status().isOk())
	            .andExpect(jsonPath("$.length()", is(2)))
	            .andExpect(jsonPath("$.[0].intitule", is("AWS Architect")));
	}
	
	@Test
	public void saveCertification_WhenCertificationValid() throws Exception {
		Certification certif = new Certification((long)5, null, "AWS Architect", "SIGMA");
		
	    given(this.certificationRepository.save(Mockito.any(Certification.class)))
	            .willReturn(certif);
	                    
	    mvc.perform(
	    		post("/certifications")
        			.contentType(MediaType.APPLICATION_JSON)
        			.content(mapper.writeValueAsString(certif))
        		)
          		.andExpect(status().isOk())
          		.andExpect(content()
          		.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
          		.andExpect(jsonPath("$.idCertification", is(5)))
                .andExpect(jsonPath("$.intitule", is("AWS Architect")))
        		.andExpect(jsonPath("$.editeur", is("SIGMA")));
	}
	
    @Test(expected=NestedServletException.class)
	public void failToSave_WhenCertificationInvalid() throws Exception {
		Certification certif = new Certification(null, "", "");
		
	    when(this.certificationRepository.save(Mockito.any(Certification.class)))
	            .thenThrow(ConstraintViolationException.class);

	    mvc.perform(
	    		post("/certifications")
        			.contentType(MediaType.APPLICATION_JSON)
        			.content(mapper.writeValueAsString(certif))
        		);
	}
	
	
	@Test
	public void deleteCertification_WhenIdValid() throws Exception {
		//doReturn(null).when(certificationRepository).deleteById((long)3); //invalide cause we cant mock a void method with return valu
	    //given(this.certificationRepository.deleteById((long)3)).willReturn(); //invalid cause given don"t accept void methods
	    //doNothing().when(certificationRepository).deleteById((long)3);  // works
	    
		long toDelete=4;

	    this.mvc.perform(delete("/certifications/4"))
	            .andExpect(status().isOk());
		// verify the mocks: verify that deleteById of certificationRepository has been called one time
        verify(certificationRepository, times(1)).deleteById(toDelete);
	}

}
