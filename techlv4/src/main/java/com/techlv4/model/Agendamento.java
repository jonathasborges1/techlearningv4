package com.techlv4.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private Usuario aluno;
    @ManyToOne
    private Usuario professor;

    private String disciplina;
    private LocalDate horarioAulaInicio;
    private LocalDate horarioAulaFim;
    //private Professor professor;
    //private Aluno aluno;
}
