import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome: 'ads123', professor_id: 1, semestre_id: 1, disciplina_id: 1, sala_id: 1, turno: 'n'},
    ])
    // Write your database queries inside the run method
  }
}