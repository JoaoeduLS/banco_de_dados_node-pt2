// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"

export default class AlunosController {  
    index(){
        return Aluno.all()
    }
    store({request}){
        const dados= request.only(['nome','data_inico','data_fim'])
        return Aluno.create(dados)
    }
    
}
