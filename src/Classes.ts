import * as leitor from "readline-sync"
import banco from "./mysql";

class Usuario {
    nome: string
    email: string
    constructor(nome: string, email: string) {
        this.nome = nome
        this.email = email
    }
}

export class Cadastro {
    usuarios: Array<Usuario>

    constructor(){
        this.usuarios = []     
    }


    async criarUsuarioBanco(usuario: Usuario): Promise<void> {
        try {
            await executeDatabaseQuery(`INSERT INTO usuarios (nome, email) VALUES (?, ?)`, [usuario.nome, usuario.email])
        } catch (err) {
            console.log("Erro: ", err);
        }
    }
    // getters

}   
async function executeDatabaseQuery(query: string, params: any[]): Promise<any> {
    try {
        const result = await banco.execute(query, params)
        return result
    } catch (err) {
        console.error('Erro na execucao da consulta', err);
        throw err
    }
}