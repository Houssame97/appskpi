package com.apps.entities;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @Getter @Setter

public class Ressource {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRessource;
	@Embedded
    private Audit audit = new Audit();
	@Size(min=1)
	private String nomRessource;
	@Size(min=1)
	private String prenomRessource;
	@Column(unique = true)
	private String matricule;
	@Size(min=1)
	private String email;
	@Size(min=9)
	private String telephone;
	@Size(min=1)
	private String adresse;
	private Integer rate;
	private Integer nbr_annee_dxc;
	private Integer nbr_annee_global;
	@Enumerated
	EnumSuperiorite niveau_superiorite;
	@ManyToOne(fetch = FetchType.EAGER)
	private Poste poste;
	@ManyToOne(fetch = FetchType.EAGER)
	private Capabilite capabilite;
	@OneToOne(fetch = FetchType.EAGER)
	//@JsonIgnore
	private Login login;

    public Ressource() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ressource(Audit audit, String nomRessource, String prenomRessource, String matricule, String email,
			String telephone, String adresse, Integer rate, Integer nbr_annee_dxc, Integer nbr_annee_global,
			EnumSuperiorite niveau_superiorite, Poste poste, Capabilite capabilite, Login login) {
		super();
		this.audit = audit;
		this.nomRessource = nomRessource;
		this.prenomRessource = prenomRessource;
		this.matricule = matricule;
		this.email = email;
		this.telephone = telephone;
		this.adresse = adresse;
		this.rate = rate;
		this.nbr_annee_dxc = nbr_annee_dxc;
		this.nbr_annee_global = nbr_annee_global;
		this.niveau_superiorite = niveau_superiorite;
		this.poste = poste;
		this.capabilite = capabilite;
		this.login = login;
	}
    
	@Override
	public String toString() {
		return "Ressource [idRessource=" + idRessource + ", audit=" + audit + ", nomRessource=" + nomRessource
				+ ", prenomRessource=" + prenomRessource + ", matricule=" + matricule + ", email=" + email
				+ ", telephone=" + telephone + ", adresse=" + adresse + ", rate=" + rate + ", nbr_annee_dxc="
				+ nbr_annee_dxc + ", nbr_annee_global=" + nbr_annee_global + ", niveau_superiorite="
				+ niveau_superiorite + "]";
	}

	public Ressource(Long idRessource, Audit audit, @Size(min = 1) String nomRessource,
			@Size(min = 1) String prenomRessource, String matricule, @Size(min = 1) String email,
			@Size(min = 9) String telephone, @Size(min = 1) String adresse, Integer rate, Integer nbr_annee_dxc,
			Integer nbr_annee_global, EnumSuperiorite niveau_superiorite, Poste poste, Capabilite capabilite,
			Login login) {
		super();
		this.idRessource = idRessource;
		this.audit = audit;
		this.nomRessource = nomRessource;
		this.prenomRessource = prenomRessource;
		this.matricule = matricule;
		this.email = email;
		this.telephone = telephone;
		this.adresse = adresse;
		this.rate = rate;
		this.nbr_annee_dxc = nbr_annee_dxc;
		this.nbr_annee_global = nbr_annee_global;
		this.niveau_superiorite = niveau_superiorite;
		this.poste = poste;
		this.capabilite = capabilite;
		this.login = login;
	}

	public Long getIdRessource() {
		return idRessource;
	}

	public void setIdRessource(Long idRessource) {
		this.idRessource = idRessource;
	}

	public Audit getAudit() {
		return audit;
	}

	public void setAudit(Audit audit) {
		this.audit = audit;
	}

	public String getNomRessource() {
		return nomRessource;
	}

	public void setNomRessource(String nomRessource) {
		this.nomRessource = nomRessource;
	}

	public String getPrenomRessource() {
		return prenomRessource;
	}

	public void setPrenomRessource(String prenomRessource) {
		this.prenomRessource = prenomRessource;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public Integer getRate() {
		return rate;
	}

	public void setRate(Integer rate) {
		this.rate = rate;
	}

	public Integer getNbr_annee_dxc() {
		return nbr_annee_dxc;
	}

	public void setNbr_annee_dxc(Integer nbr_annee_dxc) {
		this.nbr_annee_dxc = nbr_annee_dxc;
	}

	public Integer getNbr_annee_global() {
		return nbr_annee_global;
	}

	public void setNbr_annee_global(Integer nbr_annee_global) {
		this.nbr_annee_global = nbr_annee_global;
	}

	public EnumSuperiorite getNiveau_superiorite() {
		return niveau_superiorite;
	}

	public void setNiveau_superiorite(EnumSuperiorite niveau_superiorite) {
		this.niveau_superiorite = niveau_superiorite;
	}

	public Poste getPoste() {
		return poste;
	}

	public void setPoste(Poste poste) {
		this.poste = poste;
	}

	public Capabilite getCapabilite() {
		return capabilite;
	}

	public void setCapabilite(Capabilite capabilite) {
		this.capabilite = capabilite;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}
	
}
