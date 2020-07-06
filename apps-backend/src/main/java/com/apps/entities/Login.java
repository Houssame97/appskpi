package com.apps.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Embedded;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data @AllArgsConstructor @ToString @Getter @Setter @NoArgsConstructor
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idLogin;
	@Embedded
    private Audit audit = new Audit();
	@Column(unique = true)
	private String username;
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY) //don't send password
	private String password;
    private boolean isActived;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(String username, String password, boolean isActived) {
		this.username = username;
		this.password = password;
		this.isActived = isActived;
	}
	public Login(Long idLogin, String username, String password, boolean isActived) {
		this.idLogin = idLogin;
		this.username = username;
		this.password = password;
		this.isActived = isActived;
	}
	public Login(String username, String password) {
		this.username = username;
		this.password = password;
	}
	public Long getIdLogin() {
		return idLogin;
	}
	public void setIdLogin(Long idLogin) {
		this.idLogin = idLogin;
	}
	public Audit getAudit() {
		return audit;
	}
	public void setAudit(Audit audit) {
		this.audit = audit;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isActived() {
		return isActived;
	}
	public void setActived(boolean isActived) {
		this.isActived = isActived;
	}
	
}
