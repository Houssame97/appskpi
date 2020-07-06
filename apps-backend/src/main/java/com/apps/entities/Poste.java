package com.apps.entities;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString @Getter @Setter
public class Poste {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPoste;
	@Embedded
    private Audit audit = new Audit();
	@Column(unique = true)
	private String nomPoste;
	private String DescriptionPoste;
	
	public Poste() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Poste(Audit audit, String nomPoste, String descriptionPoste) {
		super();
		this.audit = audit;
		this.nomPoste = nomPoste;
		DescriptionPoste = descriptionPoste;
	}
	public Poste(Long idPoste, Audit audit, String nomPoste, String descriptionPoste) {
		super();
		this.idPoste = idPoste;
		this.audit = audit;
		this.nomPoste = nomPoste;
		DescriptionPoste = descriptionPoste;
	}
	public Long getIdPoste() {
		return idPoste;
	}
	public void setIdPoste(Long idPoste) {
		this.idPoste = idPoste;
	}
	public Audit getAudit() {
		return audit;
	}
	public void setAudit(Audit audit) {
		this.audit = audit;
	}
	public String getNomPoste() {
		return nomPoste;
	}
	public void setNomPoste(String nomPoste) {
		this.nomPoste = nomPoste;
	}
	public String getDescriptionPoste() {
		return DescriptionPoste;
	}
	public void setDescriptionPoste(String descriptionPoste) {
		DescriptionPoste = descriptionPoste;
	}
	
}
