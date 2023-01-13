export interface Ejemplo{
    hola:string
}
export interface Formulario{
    nombre:string | null | undefined,
    dni:number | null,
    estadoCivil: "soltera" | "casado" | "divorciada" | "viudo"
}