package com.techlv4.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@Entity
@DiscriminatorValue("Aluno")
public class Aluno  extends Usuario{

    //@Enumerated(EnumType.STRING)
    private Enum<Especialidade> disciplina;

    public Aluno(String nome, String email, String senha, Enum<Especialidade> _disciplina) {
        super(nome,email,senha);
        this.disciplina = _disciplina;
    }
}
