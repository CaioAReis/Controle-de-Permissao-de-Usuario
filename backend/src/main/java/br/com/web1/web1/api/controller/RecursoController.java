package br.com.web1.web1.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.web1.web1.api.dto.RecursoDTO;
import br.com.web1.web1.api.model.Recurso;
import br.com.web1.web1.api.service.RecursoService;

@RestController
@RequestMapping("/recurso")
@CrossOrigin(origins = {"http://localhost:3000"})
public class RecursoController {
    
    @Autowired
    private RecursoService recursoService;

    //  Listar todos os recursos
    @GetMapping
    public List<Recurso> listaRecursos() {
        return recursoService.listaRecursos();
    }

    //  Buscar um recurso
    @GetMapping("/{idRecurso}")
    public ResponseEntity<Recurso> buscarRecurso(@PathVariable int idRecurso) {
        return recursoService.buscarRecurso(idRecurso);
    }

    //  Salvar um novo recurso
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Recurso salvarRecurso(@RequestBody RecursoDTO recurso) {
       return recursoService.salvarRecurso(recurso);
    }

    //  Atualizar recurso existente
    @PutMapping("/{idRecurso}")
    public ResponseEntity<Recurso> atualizarRecurso(@PathVariable int idRecurso, @RequestBody RecursoDTO recurso) {
        return recursoService.atualizarRecurso(idRecurso, recurso);
    }

    //  Remover recurso
    @DeleteMapping("/{idRecurso}")
    public ResponseEntity<Recurso> removerRecurso(@PathVariable int idRecurso) {
        return recursoService.removerRecurso(idRecurso);
    }
}
