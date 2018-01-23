
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de cidades</title>
  </head>
  <body>

    <tabl border="1px"e>
      <tr>
        <th>Código</th>
        <th>Nome</th>
      </tr>


      <?php foreach($listacidade as $cidade): ?>
          <tr>
              <td><?= $cidade['id'] ?></td>
              <td><?= $cidade['nome'] ?></td>
          </tr>
      <?php endforeach ?>



    </table>

  </body>
</html>
