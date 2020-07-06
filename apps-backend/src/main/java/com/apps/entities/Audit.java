package com.apps.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.PreUpdate;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Data @Getter @Setter @NoArgsConstructor
public class Audit {
	     
	    @Column(name = "updated_on")
	    private LocalDateTime updatedOn = LocalDateTime.now();
	 
	    @Column(name = "updated_by")
	    private String updatedBy;
	 
	    @PreUpdate
	    public void preUpdate() {
	        updatedOn = LocalDateTime.now();
	       //updatedBy = LoggedUser.get();
	    }
	    
}
