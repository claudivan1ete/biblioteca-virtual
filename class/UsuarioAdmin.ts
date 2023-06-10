import { Biblioteca } from "./Biblioteca";

export class UserAdmin extends Biblioteca{
    userName : string
    password: string | number;
    idUser: number;

    constructor(userName: string, password: any, idUser: number, nomeInstituicao: string, idBiblioteca: number, cep: number){
        super(nomeInstituicao, idBiblioteca, cep)

        this.userName = userName
        this.password = password;
        this.idUser = idUser;
        
        
    };

}