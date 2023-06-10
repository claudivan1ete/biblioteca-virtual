import { Livros } from "./Livros";
import { UserAdmin } from "./UsuarioAdmin";

interface IBiblioteca {
    nomeInstituicao: string;
    idBiblioteca: number;
    cep: number;
    livros: Livros[]

    emprestar(): void;
    devolver(): void;
}

export abstract class Biblioteca implements IBiblioteca{
    nomeInstituicao: string;
    idBiblioteca: number;
    cep: number;
    livros: Livros[]

    constructor(
        nomeDaInstituicao: string, 
        idBiblioteca: number, 
        cep: number, 
    ){
        this.nomeInstituicao= nomeDaInstituicao;
        this.idBiblioteca = idBiblioteca;
        this.cep = cep;
        this.livros = []
    };

    emprestar = (): void => {
        console.log('livro emprestado');
    };

    devolver = ():void => {
        console.log('pode vir devolver seu livro');
    };

    adicionarLivro = (titulo: string, autor: string, genero: string, quantidade: number, subtitulo?: string): void => {
        if(UserAdmin){
            const livro = new Livros(titulo, autor, genero, quantidade, subtitulo);
            this.livros.push(livro)
        }else{
            console.log('erro usuario nao é admin')
        }
        
    }

    listarLivros = (): void => {
        console.log("Livros na biblioteca:");
        this.livros.forEach((livro) => console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`))
    }
    
}




