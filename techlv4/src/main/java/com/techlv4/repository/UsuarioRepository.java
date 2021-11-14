package com.techlv4.repository;

import com.techlv4.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    //Optional<Usuario> findByNome(String nome);
    @Query("SELECT u FROM Usuario u WHERE u.nome = ?1") // padrao JPQL
    Optional<Usuario> findByNome(String nome);
}
