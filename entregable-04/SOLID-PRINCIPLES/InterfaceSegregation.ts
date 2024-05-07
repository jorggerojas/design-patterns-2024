/*I-INTERFACE SEGREGATION
 * Un cliente no debe ser forzado a implementar una interface que no necesita, significa dividir las responsabilidades entre interfaces para no saturar o ocupar datos inecesarios en situaciones determinadas
 */

//En una universidad hay maestros y hay alumnos, entre otro tipo de personal, los maestros pueden ser de posgrado o de licenciatura, asi como tambien los alumnos, pero, ambos tienen acciones diferentes

interface teacher {
    name: string, 
    subject: string, 
    givesLectures(): void,
}

interface student {
    name: string, 
    subject: string,
    attendsLectures(): void,
}

//por lo que hay que segregar a alumnos de maestros pues no tienen totalmente las mismas caracteristicas y a la hora de crear una implementación de uno u otro hay que evitar la omisión de atributos