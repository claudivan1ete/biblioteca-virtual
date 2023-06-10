import { UserAdmin } from './class/UsuarioAdmin';

const rute: UserAdmin = new UserAdmin('rute', '1234', 1, 'ETE MARIA FERREIRA MARTINS', 1, 56550000)
console.log(rute);

const madalena: UserAdmin = new UserAdmin('madalena', '1234', 2, 'EREM PEDRO DE ALCÂNTARA RAMOS', 2, 56550000)
console.log(madalena);

const maria: UserAdmin = new UserAdmin('maria', '1234', 3, 'PROFESSORA EVA MARIA MOUMESSO', 3, 56550000)
console.log(maria);

maria.adicionarLivro('person jackson e os olimpianos', 'rick riordan', 'ficção', 3, 'o ladrão de raios' )
console.log(maria.livros);
