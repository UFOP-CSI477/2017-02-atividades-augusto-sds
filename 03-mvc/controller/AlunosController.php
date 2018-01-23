<?php

namespace Controller;
use Model\Aluno;

class AlunosController {
  public function listar() {

    // acesso aos dados
    $aluno = new Aluno();


    // manupulars os dados ->modelo
    $lista = $aluno->getAlunos();

    // manipular os dados
    //...


    // invocar/ retornar dados
    // return View('listar.blade.php') <- laravel
    include './view/alunos/lista.php';

  }
}
