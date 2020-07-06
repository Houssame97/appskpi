package com.apps.entities;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class Capabilite {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCapabilite;
	@Embedded
    private Audit audit = new Audit();
	@Column(unique = true)
	@Size(min=1)
	private String nomCapabilite;
	@Size(min=1)
	private String descriptionCapabilite;
	@ManyToMany(fetch = FetchType.LAZY)
	private Collection<Outil> outils;
	@ManyToMany(fetch = FetchType.LAZY)
	private Collection<Technologie> technologies;
	
    public Capabilite() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Capabilite(Audit audit, String nomCapabilite, String descriptionCapabilite) {
		this.audit = audit;
		this.nomCapabilite = nomCapabilite;
		this.descriptionCapabilite = descriptionCapabilite;
	}
    
    public Capabilite(Long idCapabilite, Audit audit, String nomCapabilite, String descriptionCapabilite) {
		this.idCapabilite = idCapabilite;
    	this.audit = audit;
		this.nomCapabilite = nomCapabilite;
		this.descriptionCapabilite = descriptionCapabilite;
	}
    
	@Override
	public String toString() {
		return "Capabilite [idCapabilite=" + idCapabilite + ", audit=" + audit + ", nomCapabilite=" + nomCapabilite
				+ ", descriptionCapailite=" + descriptionCapabilite +  "]";
	}

	public Long getIdCapabilite() {
		return idCapabilite;
	}

	public void setIdCapabilite(Long idCapabilite) {
		this.idCapabilite = idCapabilite;
	}

	public Audit getAudit() {
		return audit;
	}

	public void setAudit(Audit audit) {
		this.audit = audit;
	}

	public String getNomCapabilite() {
		return nomCapabilite;
	}

	public void setNomCapabilite(String nomCapabilite) {
		this.nomCapabilite = nomCapabilite;
	}

	public String getDescriptionCapabilite() {
		return descriptionCapabilite;
	}

	public void setDescriptionCapabilite(String descriptionCapabilite) {
		this.descriptionCapabilite = descriptionCapabilite;
	}

	public Collection<Outil> getOutils() {
		return outils;
	}

	public void setOutils(Collection<Outil> outils) {
		this.outils = outils;
	}

	public Collection<Technologie> getTechnologies() {
		return technologies;
	}

	public void setTechnologies(Collection<Technologie> technologies) {
		this.technologies = technologies;
	}
	
}
