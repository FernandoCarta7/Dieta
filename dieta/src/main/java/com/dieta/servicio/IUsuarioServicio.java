package com.dieta.servicio;

import com.dieta.modelo.Users;


import java.util.List;

public interface IUsuarioServicio {
  public List<Users> listar();
  public Users buscarPorUsuario(String nombreUsuario);
  public Users guardar(Users usuario);
  public void eliminar (Integer id);
}
