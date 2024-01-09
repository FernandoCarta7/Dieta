package com.dieta.modelo;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Paciente {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  int idPaciente;
  String primerNombre;
  String segundoNombre;
  String primerApellido;
  String segundoApellido;
  String correo;
  String numeroCelular;
  String genero; //Masculino, Femenino
  LocalDate fechaNacimiento;
}
