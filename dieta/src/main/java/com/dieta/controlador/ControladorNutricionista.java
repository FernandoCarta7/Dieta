package com.dieta.controlador;
import com.dieta.modelo.Nutricionista;
import com.dieta.servicio.NutricionistaServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/")
@CrossOrigin(value = "http://localhost:4200/inicio-sesion") //esta dirección corresponde a angular
public class ControladorNutricionista {
  private static final Logger logger = LoggerFactory.getLogger(ControladorNutricionista.class);

  @Autowired
  private NutricionistaServicio nutricionistaServicio;
  @GetMapping("/nutricionistas")
  public List<Nutricionista> obtenerNutricionistas(){
    List<Nutricionista> nutricionistas = this.nutricionistaServicio.listar();
    logger.info("Listando a nutricionistas desde controlador");
    nutricionistas.forEach((nutricionista -> logger.info(nutricionistas.toString())));
    return nutricionistas;
  }
  /*
  INSERT INTO `dieta_db`.`nutricionista` (`correo`, `primer_apellido`, `primer_nombre`, `segundo_apellido`, `segundo_nombre`) VALUES ('mariacordoba@gmail.com', 'Cordoba', 'María', 'Gutierrez', 'Alejandra');
  */
}
