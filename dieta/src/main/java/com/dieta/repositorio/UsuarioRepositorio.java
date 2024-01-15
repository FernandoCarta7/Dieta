package com.dieta.repositorio;

import com.dieta.modelo.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepositorio extends JpaRepository<Users, Integer> {
}
