package com.dieta.servicio;

import com.dieta.modelo.Usuario;
import com.dieta.repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UsuarioServicio implements IUsuarioServicio{

  @Autowired
  private UsuarioRepositorio usuarioRepositorio;
  @Override
  public List<Usuario> listar() {
    return usuarioRepositorio.findAll();
  }

  @Override
  public Usuario buscarPorId(Integer id) {
    Usuario Usuario = usuarioRepositorio.findById(id).orElse(null);
    return Usuario;
  }

  @Override
  public Usuario guardar(Usuario Usuario) {
    return this.usuarioRepositorio.save(Usuario);
  }

  @Override
  public void eliminar(Integer id) {
    this.usuarioRepositorio.deleteById(id);
  }
}
