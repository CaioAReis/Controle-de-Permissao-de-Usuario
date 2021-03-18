package br.com.web1.web1.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.web1.web1.api.model.Usuario;
import br.com.web1.web1.api.repository.UsuarioRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    //  Listar todos os usuários
    @GetMapping
    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }
    
    //  Buscar usuário
    @GetMapping("/{idUsuario}")
    public ResponseEntity<Usuario> buscarUsuario(@PathVariable int idUsuario) {
        Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
        if (usuario.isPresent()) return ResponseEntity.ok(usuario.get());
        return ResponseEntity.notFound().build();
    }

    //  Salvar usuário
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario salvarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    //  Atualizar usuário existente
    @PutMapping("atualizar/{idUsuario}")
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable int idUsuario, @RequestBody Usuario usuario) {
        if (!usuarioRepository.existsById(idUsuario)) return ResponseEntity.notFound().build();
        usuario.setId(idUsuario);
        usuario = usuarioRepository.save(usuario);
        return ResponseEntity.ok(usuario);
    }

    //  Remover usuário existente
    @DeleteMapping("/{idUsuario}")
    public ResponseEntity<Void> removerPokemon(@PathVariable int idUsuario) {
        if (!usuarioRepository.existsById(idUsuario)) return ResponseEntity.notFound().build();
        usuarioRepository.deleteById(idUsuario);
        return ResponseEntity.noContent().build();
    }
}
