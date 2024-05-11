interface AnimalTerrestre {
    caminar(): void;
  }
  
  interface AnimalAcuatico {
    nadar(): void;
  }
  
  interface AnimalVolador {
    volar(): void;
  }
  

class Caballo implements AnimalTerrestre {
    caminar(): void {
      console.log("Caminando");
    }
}
  
class Delfin implements AnimalAcuatico {
    nadar(): void {
      console.log("Nadando");
    }
}
  
class Aguila implements AnimalVolador {
    volar(): void {
      console.log("Volando");
    }
  }
  
  const caballo = new Caballo();
  caballo.caminar();
  
  const delfin = new Delfin();
  delfin.nadar();
  
  const aguila = new Aguila();
  aguila.volar();