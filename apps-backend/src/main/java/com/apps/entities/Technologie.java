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

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class Technologie {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTechnologie;
	@Embedded
    private Audit audit = new Audit();
	@Column(unique = true)
	private String nomTechnologie;
	public Technologie() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Technologie(Audit audit, String nomTechnologie) {
		super();
		this.audit = audit;
		this.nomTechnologie = nomTechnologie;
	}
	public Technologie(Long idTechnologie, Audit audit, String nomTechnologie) {
		super();
		this.idTechnologie = idTechnologie;
		this.audit = audit;
		this.nomTechnologie = nomTechnologie;
	}
	public Long getIdTechnologie() {
		return idTechnologie;
	}
	public void setIdTechnologie(Long idTechnologie) {
		this.idTechnologie = idTechnologie;
	}
	public Audit getAudit() {
		return audit;
	}
	public void setAudit(Audit audit) {
		this.audit = audit;
	}
	public String getNomTechnologie() {
		return nomTechnologie;
	}
	public void setNomTechnologie(String nomTechnologie) {
		this.nomTechnologie = nomTechnologie;
	}
	
}
