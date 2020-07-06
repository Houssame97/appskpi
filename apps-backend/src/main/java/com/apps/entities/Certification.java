package com.apps.entities;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString @Getter @Setter
public class Certification {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCertification;
	@Embedded
    private Audit audit = new Audit();
	@Size(min=1)
	private String intitule;
	@Size(min=1)
	private String editeur;
	
	public Certification() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Certification(Audit audit, String intitule, String editeur) {
		this.audit = audit;
		this.intitule = intitule;
		this.editeur = editeur;
	}

	public Certification(Long idCertification, Audit audit, @Size(min = 1) String intitule,
			@Size(min = 1) String editeur) {
		super();
		this.idCertification = idCertification;
		this.audit = audit;
		this.intitule = intitule;
		this.editeur = editeur;
	}
}
