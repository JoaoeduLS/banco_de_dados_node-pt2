/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/cursos', 'CursosController')

Route.group(() =>{
  Route.get('/','DisciplinasController.index')
  Route.post('/','DisciplinasController.store')
}).prefix('/disciplinas')
Route.group(() =>{
  Route.get('/','SalasController.index')
  Route.post('/','SalasController.store')
}).prefix('/salas')
Route.group(() =>{
  Route.get('/','SemestresController.index')
  Route.post('/','SemestresController.store')
}).prefix('/semestres')
Route.group(() =>{
  Route.get('/','ProfessorsController.index')
  Route.post('/','ProfessorsController.store')
}).prefix('/professors')
Route.group(() =>{
  Route.get('/','AlunosController.index')
  Route.post('/','AlunosController.store')
}).prefix('/alunos')
Route.group(() =>{
  Route.get('/','TurmasController.index')
  Route.post('/','TurmasController.store')
}).prefix('/turmas')
Route.group(() =>{
  Route.get('/','TurmaAlunosController.index')
  Route.post('/','TurmaAlunosController.store')
}).prefix('/turmas-alunos')
Route.group(() =>{
  Route.get('/','AulasController.index')
  Route.post('/','AulasController.store')
}).prefix('/aulas')
Route.group(() =>{
  Route.get('/','ChamadasController.index')
  Route.post('/','ChamadasController.store')
}).prefix('/chamada')