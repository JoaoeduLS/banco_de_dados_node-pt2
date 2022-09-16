import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
   await Curso.createMany([
     { nome: 'ADS', duracao: 10,},
      {nome:'Redes',duracao:1,}
    ])
  }
}
