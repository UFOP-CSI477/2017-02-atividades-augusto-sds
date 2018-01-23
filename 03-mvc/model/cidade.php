<?php
namespace Model;
class Cidade {
    public function getCidade() {
        $sql = "SELECT * FROM cidades ORDER BY nome";
        $cidade = Database::getInstance()->getDB()->query($sql);
        return $cidade;
    }
}