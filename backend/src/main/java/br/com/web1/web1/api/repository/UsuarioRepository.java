package br.com.web1.web1.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.web1.web1.api.model.Recurso;
import br.com.web1.web1.api.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

    @Modifying @Transactional
    @Query(value = "INSERT INTO permissao_usuario(usuario_id, recurso_id) VALUES (:usuario_id, :recurso_id)", nativeQuery = true)
    void addRecurso(@Param("usuario_id") int usuario_id, @Param("recurso_id") int recurso_id);

    Usuario findByLoginAndSenha(String login, String senha);

}
