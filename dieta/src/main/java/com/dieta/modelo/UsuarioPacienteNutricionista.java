package com.dieta.modelo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioPacienteNutricionista {
  int idUsuario;
  int idPaciente;
  int idNutricionista;
}
