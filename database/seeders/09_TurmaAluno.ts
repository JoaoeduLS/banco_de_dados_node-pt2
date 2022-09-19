import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TurmaAluno from 'App/Models/TurmaAluno'

export default class extends BaseSeeder {
  public async run () {
    await TurmaAluno.createMany([
      {turma_id: 1, aluno_id: 1},
    ])
    // Write your database queries inside the run method
  }
}
