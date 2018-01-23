<?php
namespace Model;
class Estado {
    public function getEstado() {
        $sql = "SELECT * FROM estados ORDER BY nome";
        $estado = Database::getInstance()->getDB()->query($sql);
        return $estado;
    }
}