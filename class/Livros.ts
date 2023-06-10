export class Livros {
    titulo: string
    subtitulo?: string
    autor: string
    genero: string
    quantidade: number

    constructor(
        titulo: string,
        autor: string,
        genero: string,
        quantidade: number,
        subtitulo?: string
    ){
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.quantidade = quantidade
        this.subtitulo = subtitulo
    }
}