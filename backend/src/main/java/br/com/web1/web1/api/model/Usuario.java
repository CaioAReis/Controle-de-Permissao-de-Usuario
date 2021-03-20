package br.com.web1.web1.api.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Usuario {
    //  Atributos
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false, length = 100)
    private String login;

    @JsonIgnore
    @Column(nullable = false, length = 9999)
    private String senha;

    @Column(nullable = false, length = 200)
    private String email;

    @Column(nullable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date data_nascimento;

    @Column(nullable = false)
    private char status;

    //  Mapeação de relacionamento M:M
    @ManyToMany
    @JoinTable(name = "permissao_usuario",
    joinColumns = @JoinColumn(name = "usuario_id"),
    inverseJoinColumns = @JoinColumn(name = "recurso_id"))
    private List<Recurso> recursos;

    //  Getters and Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    //  Nome
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    //  Login
    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }
    //  Senha
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
    //  Email
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    //  Data nascimento
    public Date getData_nascimento() {
        return data_nascimento;
    }
    public void setData_nascimento(Date data_nascimento) {
        this.data_nascimento = data_nascimento;
    }
    // Status
    public char getStatus() {
        return status;
    }
    public void setStatus(char status) {
        this.status = status;
    }
    //  Recursos
    public List<Recurso> getRecursos() {
        return recursos;
    }
    public void setRecursos(List<Recurso> recursos) {
        this.recursos = recursos;
    }
    //  Equals
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        Usuario other = (Usuario) obj;
        if (id != other.id) return false;
        else return true;
    }
}
