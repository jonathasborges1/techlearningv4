package com.techlv4.controller;

import com.techlv4.model.Usuario;
import com.techlv4.service.UsuarioService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.*;

@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1")
@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/usuarios")
    @ResponseStatus(HttpStatus.OK)
    public List<Usuario> buscaUsuarios() { return usuarioService.listar(); } // Retorna uma lista de usuários

    @PostMapping("/usuarios")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario cadastrarUsuario(@RequestBody Usuario novoUsuario){
        return usuarioService.salvar(novoUsuario);
    }

    @GetMapping("/usuarios/{id}")
    @ResponseStatus(HttpStatus.OK)
    Usuario busca1Usuario(@PathVariable Long id) {
        return usuarioService.buscarPorId(id).orElseThrow(
            //() -> new UserNotFoundException(id)); // se o cliente não exitir ele trata com Exception
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente nao encontrado."));
    }

    @PutMapping("/usuarios/{id}")
    public void atualizaUsuario(@RequestBody Usuario novoUsuario, @PathVariable("id") Long id) {
        usuarioService.buscarPorId(id)
            .map(usuarioBase -> {
                modelMapper.map(novoUsuario,usuarioBase);
                usuarioService.salvar(usuarioBase);
                return Void.TYPE;
            }).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente nao encontrado."));
    }

    @DeleteMapping("/usuarios/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUsuario(@PathVariable Long id) {
        usuarioService.removerPorId(id);
    }

    //@RequestMapping(value = "/usuarios/login/{nome}", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json" ,consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    @GetMapping("/usuarios/login/{nome}")
    @PostMapping("/usuarios/login/{nome}")
    public ResponseEntity<Usuario> login(@PathVariable String nome) {
        Optional<Usuario> token = usuarioService.login(nome);
        return token.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

    }
}


/*
        try{
            Optional<Usuario> token = usuarioService.login(nome);
            //return token.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
            return ResponseEntity.status(HttpStatus.OK).body(token);
            //return token.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        }catch (Error e){
            return ResponseEntity.badRequest().build();
        }
*/
//return token.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
