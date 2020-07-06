package com.apps.entities;



import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @Getter @Setter
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idClient;
	@Embedded
    private Audit audit = new Audit();
	@Size(min=1)
	private String nomClient;
    @ManyToOne(fetch = FetchType.EAGER)
    private Industrie industrie;
	
	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Client(Audit audit, String nomClient, Industrie industrie) {
		this.audit = audit;
		this.nomClient = nomClient;
		this.industrie = industrie;
    }
    
    @Override
	public String toString() {
		return "Client [idClient=" + idClient + ", audit=" + audit + ", nomClient=" + nomClient +
        ", industrie=" + industrie + "]";
	}

	public Client(Long idClient, Audit audit, @Size(min = 1) String nomClient, Industrie industrie) {
		super();
		this.idClient = idClient;
		this.audit = audit;
		this.nomClient = nomClient;
		this.industrie = industrie;
	}

	public Long getIdClient() {
		return idClient;
	}

	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}

	public Audit getAudit() {
		return audit;
	}

	public void setAudit(Audit audit) {
		this.audit = audit;
	}

	public String getNomClient() {
		return nomClient;
	}

	public void setNomClient(String nomClient) {
		this.nomClient = nomClient;
	}

	public Industrie getIndustrie() {
		return industrie;
	}

	public void setIndustrie(Industrie industrie) {
		this.industrie = industrie;
	}
    
}
