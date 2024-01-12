package com.dieta.servicio;

import com.dieta.modelo.Usuario;

import java.util.List;

public interface IUsuarioServicio {
  public List<Usuario> listar();
  public Usuario buscarPorId(Integer id);
  public Usuario guardar(Usuario usuario);
  public void eliminar (Integer id);
}
