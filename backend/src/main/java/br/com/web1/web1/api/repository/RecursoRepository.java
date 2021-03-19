package br.com.web1.web1.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.web1.web1.api.model.Recurso;

public interface RecursoRepository extends JpaRepository<Recurso, Integer>{
    
}
