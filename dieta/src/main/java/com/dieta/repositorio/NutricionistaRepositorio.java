package com.dieta.repositorio;

import com.dieta.modelo.Nutricionista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NutricionistaRepositorio extends JpaRepository<Nutricionista, Integer> {
}
