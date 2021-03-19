package br.com.web1.web1.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.web1.web1.api.model.Recurso;
import br.com.web1.web1.api.repository.RecursoRepository;

@RestController
@RequestMapping("/recurso")
public class RecursoController {
    
    @Autowired
    private RecursoRepository recursoRepository;

    //  Listar todos os recursos
    @GetMapping
    public List<Recurso> listaRecursos() {
        return recursoRepository.findAll();
    }

    //  Buscar um recurso
    @GetMapping("/{idRecurso}")
    public ResponseEntity<Recurso> buscarRecurso(@PathVariable int idRecurso) {
        Optional<Recurso> recurso = recursoRepository.findById(idRecurso);
        if (recurso.isPresent()) return ResponseEntity.ok(recurso.get());
        return ResponseEntity.notFound().build();
    }

    //  Salvar um novo recurso
    @PostMapping("/salvar")
    @ResponseStatus(HttpStatus.CREATED)
    public Recurso salvarRecurso(@RequestBody Recurso recurso) {
       return recursoRepository.save(recurso);
    }
    
    
}
