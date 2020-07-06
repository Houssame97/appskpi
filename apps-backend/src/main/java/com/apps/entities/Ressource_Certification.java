package com.apps.entities;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString @Getter @Setter
public class Ressource_Certification {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idRessource_Certification;
	@Embedded
    private Audit audit = new Audit();
	@ManyToOne(fetch = FetchType.EAGER)
	private Certification certification;
	@ManyToOne(fetch = FetchType.EAGER)
	private Ressource ressource;
	private Integer annee_obtention;
	private Boolean obtenue_a_dxc;
	private Integer niveau_de_maitrise;
	public Ressource_Certification() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Ressource_Certification(Audit audit, Certification certification, Ressource ressource,
			Integer annee_obtention, Boolean obtenue_a_dxc, Integer niveau_de_maitrise) {
		super();
		this.audit = audit;
		this.certification = certification;
		this.ressource = ressource;
		this.annee_obtention = annee_obtention;
		this.obtenue_a_dxc = obtenue_a_dxc;
		this.niveau_de_maitrise = niveau_de_maitrise;
	}
	public Ressource_Certification(Long idRessource_Certification, Audit audit, Certification certification,
			Ressource ressource, Integer annee_obtention, Boolean obtenue_a_dxc, Integer niveau_de_maitrise) {
		super();
		this.idRessource_Certification = idRessource_Certification;
		this.audit = audit;
		this.certification = certification;
		this.ressource = ressource;
		this.annee_obtention = annee_obtention;
		this.obtenue_a_dxc = obtenue_a_dxc;
		this.niveau_de_maitrise = niveau_de_maitrise;
	}
	public Long getIdRessource_Certification() {
		return idRessource_Certification;
	}
	public void setIdRessource_Certification(Long idRessource_Certification) {
		this.idRessource_Certification = idRessource_Certification;
	}
	public Audit getAudit() {
		return audit;
	}
	public void setAudit(Audit audit) {
		this.audit = audit;
	}
	public Certification getCertification() {
		return certification;
	}
	public void setCertification(Certification certification) {
		this.certification = certification;
	}
	public Ressource getRessource() {
		return ressource;
	}
	public void setRessource(Ressource ressource) {
		this.ressource = ressource;
	}
	public Integer getAnnee_obtention() {
		return annee_obtention;
	}
	public void setAnnee_obtention(Integer annee_obtention) {
		this.annee_obtention = annee_obtention;
	}
	public Boolean getObtenue_a_dxc() {
		return obtenue_a_dxc;
	}
	public void setObtenue_a_dxc(Boolean obtenue_a_dxc) {
		this.obtenue_a_dxc = obtenue_a_dxc;
	}
	public Integer getNiveau_de_maitrise() {
		return niveau_de_maitrise;
	}
	public void setNiveau_de_maitrise(Integer niveau_de_maitrise) {
		this.niveau_de_maitrise = niveau_de_maitrise;
	}
	
}
