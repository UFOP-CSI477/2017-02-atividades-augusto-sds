// Atividade 1 Verificar os radio butons vazios e valor correto
$(document).ready(function(){
  $("button[name='verificar']").click(function(){
    if (! $("input[type='radio'][name='g1']").is(':checked') ){
      alert("Selecione um item no grupo 1.");

    }
  });



  $("button[name='verificar']").click(function(){
    if (! $("input[type='radio'][name='g2']").is(':checked') ){
      alert("Selecione um item no grupo 2.");

    }
  });


 $("button[name='verificar']").click(function(){
    if (! $("input[type='radio'][name='g3']").is(':checked') ){
      alert("Selecione um item no grupo 3.");

    }
  });


  $("button[name='verificar']").click(function(){
    if (! $("input[type='radio'][name='g4']").is(':checked') ){
      alert("Selecione um item no grupo 4.");

    }
  });



        $("button[name='verificar']").click(function(){
            var valor = "";

            $('input:radio[name=g1]').each(function() {

                if ($(this).is(':checked'))
                    valor = parseInt($(this).val());
                })
                if (valor == 2 ){
					alert("Voce acertou o item do grupo 1.");
				}else {
					alert("Voce Errou, a resposta certa do grupo 1 é Sabonete.");
				}
        })



        $("button[name='verificar']").click(function(){
            var valor2 = "";

            $('input:radio[name=g2]').each(function() {

                if ($(this).is(':checked'))
                    valor2 = parseInt($(this).val());
                })
                if (valor2 == 3 ){
					alert("Voce acertou o item do grupo 2.");
				}else {
					alert("Voce Errou, a resposta certa do grupo 2 é Algodão doce.");
				}
        })



        $("button[name='verificar']").click(function(){
            var valor3 = "";

            $('input:radio[name=g3]').each(function() {

                if ($(this).is(':checked'))
                    valor3 = parseInt($(this).val());
                })
                if (valor3 == 4 ){
					alert("Voce acertou o item do grupo 3.");
				}else {
					alert("Voce Errou, a resposta certa do grupo 3 é Maquina de Lavar.");
				}
        })



        $("button[name='verificar']").click(function(){
            var valor4 = "";

            $('input:radio[name=g4]').each(function() {

                if ($(this).is(':checked'))
                    valor4 = parseInt($(this).val());
                })
                if (valor4 == 4 ){
					alert("Voce acertou o item do grupo 4.");
				}else {
					alert("Voce Errou, a resposta certa do grupo 4 é Chave de Fenda.");
				}
        })


	// Atividade 2 Verificar os selects para verificar opção correta



	 $("button[name='verificar2']").click(function(){
        if ($("#fig1").val() == "0") {
            alert("Selecione uma Figura Geométrica na Figura 1!");
        }
		if ($("#fig1").val() == "1") {
            alert("Você acertou a figura 1 é um TRIANGULO");
		}else{
			alert("Você errou, a figura 1 é um TRIANGULO");
		}
    });

	$("button[name='verificar2']").click(function(){
        if ($("#fig2").val() == "0") {
            alert("Selecione uma Figura Geométrica na Figura 2!");
        }
		if ($("#fig2").val() == "2") {
            alert("Você acertou a figura 2 é um QUADRADO ");
		}else{
			alert("Você errou, a figura 2 é um QUADRADO");
		}
    });

	$("button[name='verificar2']").click(function(){
        if ($("#fig3").val() == "0") {
            alert("Selecione uma Figura Geométrica na Figura 3!");
        }
		if ($("#fig3").val() == "3") {
            alert("Você acertou a figura 3 é um CIRCULO");
		}else{
			alert("Você errou, a figura 3 é um CIRCULO");
		}
    });


	$("button[name='verificar2']").click(function(){
        if ($("#fig4").val() == "0") {
            alert("Selecione uma Figura Geométrica na Figura 4!");
        }
		if ($("#fig4").val() == "4") {
            alert("Você acertou a figura 4 RETANGULO ");
		}else{
			alert("Você errou, a figura 4 é um RETANGULO");
		}

    });



});
