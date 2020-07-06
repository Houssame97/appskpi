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
public class TypeActivite {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTypeActivite;
	@Embedded
    private Audit audit = new Audit();
	@Column(unique = true)
	private String nomTypeActivite;
	public TypeActivite() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TypeActivite(Audit audit, String nomTypeActivite) {
		super();
		this.audit = audit;
		this.nomTypeActivite = nomTypeActivite;
	}
	public TypeActivite(Long idTypeActivite, Audit audit, String nomTypeActivite) {
		super();
		this.idTypeActivite = idTypeActivite;
		this.audit = audit;
		this.nomTypeActivite = nomTypeActivite;
	}
	public Long getIdTypeActivite() {
		return idTypeActivite;
	}
	public void setIdTypeActivite(Long idTypeActivite) {
		this.idTypeActivite = idTypeActivite;
	}
	public Audit getAudit() {
		return audit;
	}
	public void setAudit(Audit audit) {
		this.audit = audit;
	}
	public String getNomTypeActivite() {
		return nomTypeActivite;
	}
	public void setNomTypeActivite(String nomTypeActivite) {
		this.nomTypeActivite = nomTypeActivite;
	}
	
}
