package com.dieta.servicio;

import com.dieta.modelo.Nutricionista;

import java.util.List;

public interface INutricionistaServicio {
  public List<Nutricionista> listar();
  public Nutricionista buscarPorId(Integer id);
  public Nutricionista guardar(Nutricionista nutricionista);
  public void eliminar (Integer id);
}
