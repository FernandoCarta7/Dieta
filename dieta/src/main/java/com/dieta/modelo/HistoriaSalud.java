package com.dieta.modelo;

import java.util.ArrayList;
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
public class HistoriaSalud {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  int idHistoriaSalud;
  int idUsuario;
  ArrayList<String> enfermedades;
  double imc;
  int estatura;
}
