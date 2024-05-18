  
    interface Comedor {
        comer(): void;
      }
      
      interface Volador {
        volar(): void;
      }
      
      interface Nadador {
        nadar(): void;
      }
      
      class Pinguino implements Comedor, Nadador {
        comer() {
          // Implementación
        }
      
        nadar() {
          // Implementación
        }
      }
      
      class Aguila implements Volador, Comedor {
        comer() {
          // Implementación
        }
      
        volar() {
          // Implementación
        }
      }
      
    