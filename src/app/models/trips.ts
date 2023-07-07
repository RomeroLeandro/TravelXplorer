export class Trip {
  id: number;
  lugarSalida: string;
  lugarDestino:string;
  fechaLlegada: string;
  fechaSalida: string;
  personaId: number[];
  idColectivo: number;

  constructor(id: number, lugarSalida: string, lugarDestino:string, fechaLlegada: string,fechaSalida: string,personaId: number[],idColectivo: number) {
    this.id = id;
    this.lugarSalida = lugarSalida;
    this.lugarDestino = lugarDestino;
    this.fechaLlegada = fechaLlegada;
    this.fechaSalida = fechaSalida;
    this.personaId = personaId;
    this.idColectivo = idColectivo;
  }
}
