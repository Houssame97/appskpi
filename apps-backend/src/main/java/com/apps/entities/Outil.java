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
public class Outil {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOutil;
	@Embedded
    private Audit audit = new Audit();
	@Column(unique = true)
	private String nomOutil;
	private String categorie;
	public Outil() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Outil(Audit audit, String nomOutil, String categorie) {
		super();
		this.audit = audit;
		this.nomOutil = nomOutil;
		this.categorie = categorie;
	}
	public Outil(Long idOutil, Audit audit, String nomOutil, String categorie) {
		super();
		this.idOutil = idOutil;
		this.audit = audit;
		this.nomOutil = nomOutil;
		this.categorie = categorie;
	}
	public Long getIdOutil() {
		return idOutil;
	}
	public void setIdOutil(Long idOutil) {
		this.idOutil = idOutil;
	}
	public Audit getAudit() {
		return audit;
	}
	public void setAudit(Audit audit) {
		this.audit = audit;
	}
	public String getNomOutil() {
		return nomOutil;
	}
	public void setNomOutil(String nomOutil) {
		this.nomOutil = nomOutil;
	}
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}
	
}
