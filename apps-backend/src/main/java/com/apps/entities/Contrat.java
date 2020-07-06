package com.apps.entities;

import java.util.Date;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString @Getter @Setter
public class Contrat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idContrat;
	@Embedded
    private Audit audit = new Audit();
	@Size(min=1)
	private String descriptionContrat;
	@JsonFormat(pattern="yyyy-MM-dd")
    private Date date_debut;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date_fin;
    @ManyToOne(fetch = FetchType.EAGER)
    private TypeActivite typeActivite;
    @ManyToOne(fetch = FetchType.EAGER)
    private TypeFacturation typeFacturation;
    @ManyToOne(fetch = FetchType.EAGER)
    private Client client;
	
	public Contrat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Contrat(Audit audit, String descriptionContrat , Date date_debut, Date date_fin, TypeActivite typeActivite, TypeFacturation typeFacturation, Client client) {
		this.audit = audit;
        this.descriptionContrat = descriptionContrat;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.typeActivite = typeActivite;
        this.typeFacturation = typeFacturation;
        this.client = client;
	}

	public Long getIdContrat() {
		return idContrat;
	}

	public void setIdContrat(Long idContrat) {
		this.idContrat = idContrat;
	}

	public Audit getAudit() {
		return audit;
	}

	public void setAudit(Audit audit) {
		this.audit = audit;
	}

	public String getDescriptionContrat() {
		return descriptionContrat;
	}

	public void setDescriptionContrat(String descriptionContrat) {
		this.descriptionContrat = descriptionContrat;
	}

	public Date getDate_debut() {
		return date_debut;
	}

	public void setDate_debut(Date date_debut) {
		this.date_debut = date_debut;
	}

	public Date getDate_fin() {
		return date_fin;
	}

	public void setDate_fin(Date date_fin) {
		this.date_fin = date_fin;
	}

	public TypeActivite getTypeActivite() {
		return typeActivite;
	}

	public void setTypeActivite(TypeActivite typeActivite) {
		this.typeActivite = typeActivite;
	}

	public TypeFacturation getTypeFacturation() {
		return typeFacturation;
	}

	public void setTypeFacturation(TypeFacturation typeFacturation) {
		this.typeFacturation = typeFacturation;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}
	
}
