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
public class Industrie {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idIndustrie;
	@Embedded
    private Audit audit = new Audit();
	@Column(unique = true)
	private String nomIndustrie;
	public Industrie() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Industrie(Audit audit, String nomIndustrie) {
		super();
		this.audit = audit;
		this.nomIndustrie = nomIndustrie;
	}
	public Industrie(Long idIndustrie, Audit audit, String nomIndustrie) {
		super();
		this.idIndustrie = idIndustrie;
		this.audit = audit;
		this.nomIndustrie = nomIndustrie;
	}
	public Long getIdIndustrie() {
		return idIndustrie;
	}
	public void setIdIndustrie(Long idIndustrie) {
		this.idIndustrie = idIndustrie;
	}
	public Audit getAudit() {
		return audit;
	}
	public void setAudit(Audit audit) {
		this.audit = audit;
	}
	public String getNomIndustrie() {
		return nomIndustrie;
	}
	public void setNomIndustrie(String nomIndustrie) {
		this.nomIndustrie = nomIndustrie;
	}
	
}
