package com.dieta.modelo;

import java.time.LocalDateTime;
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
public class Turno {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  int idTurno;
  LocalDateTime fechaTurno;
  String descripcion;
}
