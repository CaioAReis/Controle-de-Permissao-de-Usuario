package br.com.web1.web1.api.dto;

import br.com.web1.web1.api.model.Recurso;

public class RecursoDTO {
    //  Atributos
    private int id;
    private String nome;
    private char status;

    public Recurso toRecurso() {
        Recurso recurso = new Recurso();
        recurso.setId(id);
        recurso.setNome(nome);
        recurso.setStatus(status);
        return recurso;
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
    // Status
    public char getStatus() {
        return status;
    }
    public void setStatus(char status) {
        this.status = status;
    }
}
