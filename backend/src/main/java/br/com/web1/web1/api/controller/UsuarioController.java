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

import br.com.web1.web1.api.dto.UsuarioDTO;
import br.com.web1.web1.api.model.Recurso;
import br.com.web1.web1.api.model.Usuario;
import br.com.web1.web1.api.service.UsuarioService;


@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    //  Listar todos os usuários
    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.listar();
    }
    
    //  Buscar usuário
    @GetMapping("/{idUsuario}")
    public ResponseEntity<Usuario> buscarUsuario(@PathVariable int idUsuario) {
        return usuarioService.buscarUsuario(idUsuario);
    }

    //  Lista de Recuros do usuário
    @GetMapping("/recursos/{idUsuario}")
    public List<Recurso> buscarRecursosUsuario(@PathVariable int idUsuario) {
        return usuarioService.buscarRecursosUsuario(idUsuario);
    }

    //  Salvar usuário
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario salvarUsuario(@RequestBody UsuarioDTO usuario) {
        return usuarioService.salvarUsuario(usuario);
    }

    //  Atualizar usuário existente
    @PutMapping("/{idUsuario}")
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable int idUsuario, @RequestBody UsuarioDTO usuario) {
        return usuarioService.atualizarUsuario(idUsuario, usuario);
    }

    //  Remover usuário existente
    @DeleteMapping("/{idUsuario}")
    public ResponseEntity<Void> removerUsuario(@PathVariable int idUsuario) {
        return usuarioService.removerUsuario(idUsuario);
    }

    //  Autenticar Usuário
    @PostMapping("/autenticar")
    public ResponseEntity<Usuario> autenticar(@RequestBody UsuarioDTO usuario) {
        return usuarioService.autenticar(usuario);
    }

    //  Adicionar recurso
    @PostMapping("/permissao/{idUsuario}/{idRecurso}")
    public ResponseEntity<Void> adicionarPermissao(@PathVariable int idUsuario, @PathVariable int idRecurso) {
        return usuarioService.adicionarPermissao(idUsuario, idRecurso);
    }
}
