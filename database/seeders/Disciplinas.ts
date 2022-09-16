import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplinas from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplinas.createMany([
    {nome:'front',cursoId: 1},
    {nome:'back',cursoId: 1},
    ])
  }
}
