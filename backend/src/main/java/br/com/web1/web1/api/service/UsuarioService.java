package br.com.web1.web1.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.web1.web1.api.dto.UsuarioDTO;
import br.com.web1.web1.api.model.Recurso;
import br.com.web1.web1.api.model.Usuario;
import br.com.web1.web1.api.repository.RecursoRepository;
import br.com.web1.web1.api.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    private RecursoRepository recursoRepository;

    //  Listar todos os usuários
    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }
    
    //  Buscar usuário
    public ResponseEntity<Usuario> buscarUsuario(int idUsuario) {
        Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
        if (usuario.isPresent()) return ResponseEntity.ok(usuario.get());
        return ResponseEntity.notFound().build();
    }

    //  Lista de recursos permitidos pelo usuário
    public List<Recurso> buscarRecursosUsuario(int idUsuario) {
        return usuarioRepository.findById(idUsuario).get().getRecursos();
    }

    //  Salvar usuário
    public Usuario salvarUsuario(UsuarioDTO usuario) {
        return usuarioRepository.save(usuario.toUsuario());
    }

    //  Atualizar usuário existente
    public ResponseEntity<Usuario> atualizarUsuario(int idUsuario, UsuarioDTO usuario) {
        if (!usuarioRepository.existsById(idUsuario)) return ResponseEntity.notFound().build();
        usuario.setId(idUsuario);
        Usuario usuario2 = usuarioRepository.save(usuario.toUsuario());
        return ResponseEntity.ok(usuario2);
    }

    //  Remover usuário existente
    public ResponseEntity<Void> removerUsuario(int idUsuario) {
        if (!usuarioRepository.existsById(idUsuario)) return ResponseEntity.notFound().build();
        usuarioRepository.deleteById(idUsuario);
        return ResponseEntity.noContent().build();
    }

    //  Autenticar Usuário
    public ResponseEntity<Usuario> autenticar(UsuarioDTO usuario) {
        Usuario usuario2 = usuarioRepository.findByLoginAndSenha(usuario.getLogin(), usuario.getSenha());
        if (usuario2 == null) return ResponseEntity.noContent().build();
        else return ResponseEntity.ok(usuario2);
    }

    //  Adicionar recurso
    public ResponseEntity<Void> adicionarPermissao(int idUsuario, int idRecurso) {
        if (!usuarioRepository.existsById(idUsuario)) return ResponseEntity.notFound().build();
        if (!recursoRepository.existsById(idRecurso)) return ResponseEntity.notFound().build();
        usuarioRepository.addRecurso(idUsuario, idRecurso);
        return ResponseEntity.ok().build();
    }
}
