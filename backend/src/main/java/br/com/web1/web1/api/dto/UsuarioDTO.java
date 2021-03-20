package br.com.web1.web1.api.dto;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.web1.web1.api.model.Recurso;
import br.com.web1.web1.api.model.Usuario;

public class UsuarioDTO {
    //  Atributos
    private int id;
    private String nome;
    private String login;
    private String senha;
    private String email;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date data_nascimento;
    private char status;
    private List<Recurso> recursos;

    public Usuario toUsuario() {
        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNome(nome);
        usuario.setLogin(login);
        usuario.setSenha(senha);
        usuario.setEmail(email);
        usuario.setData_nascimento(data_nascimento);
        usuario.setStatus(status);
        usuario.setRecursos(recursos);
        return usuario;
    }

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
}
