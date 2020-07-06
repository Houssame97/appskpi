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
public class TypeFacturation {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTypeFacturation;
	@Embedded
    private Audit audit = new Audit();
	@Column(unique = true)
    private String nomTypeFacturation;
    
    public TypeFacturation() {
		super();
		// TODO Auto-generated constructor stub
	}


	public TypeFacturation(Audit audit, String nomTypeFacturation) {
		this.audit = audit;
		this.nomTypeFacturation = nomTypeFacturation;
    }
    

    @Override
	public String toString() {
		return "TypeFacturation [idTypeFacturation=" + idTypeFacturation + ", audit=" + audit + ", nomTypeFacturation=" + nomTypeFacturation
				+ "]";
	}


	public TypeFacturation(Long idTypeFacturation, Audit audit, String nomTypeFacturation) {
		super();
		this.idTypeFacturation = idTypeFacturation;
		this.audit = audit;
		this.nomTypeFacturation = nomTypeFacturation;
	}


	public Long getIdTypeFacturation() {
		return idTypeFacturation;
	}


	public void setIdTypeFacturation(Long idTypeFacturation) {
		this.idTypeFacturation = idTypeFacturation;
	}


	public Audit getAudit() {
		return audit;
	}


	public void setAudit(Audit audit) {
		this.audit = audit;
	}


	public String getNomTypeFacturation() {
		return nomTypeFacturation;
	}


	public void setNomTypeFacturation(String nomTypeFacturation) {
		this.nomTypeFacturation = nomTypeFacturation;
	}
    
}
