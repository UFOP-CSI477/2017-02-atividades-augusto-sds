<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de estados </title>
  </head>
  <body>

  <table border="1px">
      <tr>
        <th>Código</th>
        <th>Sigla</th>
      </tr>

      
      <?php foreach($listaestado as $estado): ?>
          <tr>
              <td><?= $estado['nome'] ?></td>
              <td><?= $estado['sigla'] ?></td>
          </tr>
      <?php endforeach ?>



    </table>

  </body>
</html>
