<?php
namespace Controller;
use Model\cidade;
class CidadesController {
    public function listacidade() {
        // Acesso aos dados
        $cidade = new Cidade();
    
        $listacidade = $cidade->getCidade();

        include './view/cidades/listacidade.php';
    }
}
