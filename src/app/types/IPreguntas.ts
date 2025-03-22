
export interface IPregunta {
  categoria: string;
  preguntas: {
    titulo: string;
    respuesta: string;
  }[];
}