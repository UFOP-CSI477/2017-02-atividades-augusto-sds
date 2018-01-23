<?php
namespace Controller;
use Model\estado;
class EstadosController {
    public function listaestado() {
        // Acesso aos dados
        $estado = new Estado();
        
        $listaestado = $estado->getEstado();

        include './view/estados/listaestado.php';
    }
}
