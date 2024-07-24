export class Usuario {
  constructor(
    public nombreUsuario: string,
    public email: string,
    public password: string,
    public reproducciones: number,
    public generoMusical: string[],
    public artista: Artista,
    public album: string,
  ) {}
}
