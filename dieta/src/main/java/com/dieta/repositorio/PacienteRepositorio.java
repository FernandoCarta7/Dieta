package com.dieta.repositorio;

import com.dieta.modelo.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepositorio extends JpaRepository<Paciente, Integer> {
}
