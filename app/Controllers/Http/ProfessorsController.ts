// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from "App/Models/Professor"

export default class ProfessorsController {  
    index(){
        return Professor.all()
    }
    store({request}){
        const dados= request.only(['nome','cpf','matricula','salario','email'])
        return Professor.create(dados)
    }
    
}
