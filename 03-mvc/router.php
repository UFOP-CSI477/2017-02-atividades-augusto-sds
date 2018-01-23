<?php
// Includes - framework
include './model/Database.php';
include './model/Aluno.php';
include './controller/AlunosController.php';
include './model/cidade.php';
include './controller/CidadesController.php';
include './model/estado.php';
include './controller/EstadosController.php';
// Tratamento das rotas
use Controller\AlunosController;
use Controller\EstadosController;
use Controller\CidadesController;
$op = $_GET['op'];
// Definição das rotas
if ( $op == 1 ) {
    $alunoController = new AlunosController;
    $alunoController->listar();
}
if ( $op == 2 ) {
    $estadoController = new EstadosController;
    $estadoController->listaestado();
}
if ( $op == 3 ) {
    $cidadeController = new CidadesController;
    $cidadeController->listacidade();
}
