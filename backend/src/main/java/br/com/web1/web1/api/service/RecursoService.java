package br.com.web1.web1.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.web1.web1.api.dto.RecursoDTO;
import br.com.web1.web1.api.model.Recurso;
import br.com.web1.web1.api.repository.RecursoRepository;

@Service
public class RecursoService {
       
    @Autowired
    private RecursoRepository recursoRepository;

    //  Listar todos os recursos
    public List<Recurso> listaRecursos() {
        return recursoRepository.findAll();
    }

    //  Buscar um recurso
    public ResponseEntity<Recurso> buscarRecurso(int idRecurso) {
        Optional<Recurso> recurso = recursoRepository.findById(idRecurso);
        if (recurso.isPresent()) return ResponseEntity.ok(recurso.get());
        return ResponseEntity.notFound().build();
    }

    //  Salvar um novo recurso
    public Recurso salvarRecurso(RecursoDTO recurso) {
       return recursoRepository.save(recurso.toRecurso());
    }

    //  Atualizar recurso existente
    public ResponseEntity<Recurso> atualizarRecurso(int idRecurso, RecursoDTO recurso) {
        if (!recursoRepository.existsById(idRecurso)) return ResponseEntity.notFound().build();
        recurso.setId(idRecurso);
        Recurso recurso2 = recursoRepository.save(recurso.toRecurso());
        return ResponseEntity.ok(recurso2);
    }

    //  Remover recurso
    public ResponseEntity<Recurso> removerRecurso(int idRecurso) {
        if (!recursoRepository.existsById(idRecurso)) return ResponseEntity.notFound().build();
        recursoRepository.deleteById(idRecurso);
        return ResponseEntity.noContent().build();
    }
}
