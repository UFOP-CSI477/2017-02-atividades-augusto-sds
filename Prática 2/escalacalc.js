$(document).ready(function(){
$( "#calcular" ).click(function() {
    //alert("entrei");
		var am =$("#ampli").val();
		var te =$("#tempo").val();

        //var a = parseFloat($("input[type="text"][name='ampli']").val());
	    //var t = parseFloat($("input[type="text"][name='tempo']").val());
		//alert("Clique");

          /* if (isNaN(a)) {
				$("#gampli").addClass("has-error");
				$("#alertaV1").show();
				$("input[name='ampli']").val("");
				$("input[name='ampli']").focus();
				return;
			}
			$("#gampli").removeClass("has-error");
			$("#alertaV1").hide();

			if (isNaN(t)) {
				$("#gtempo").addClass("has-error");
				$("#alertaV2").show();
				$("input[name='tempo']").val("");
				$("input[name='tempo']").focus();
				return;
			}

		   $("#gtempo").removeClass("has-error");
			$("#alertaV2").hide();*/

		//var logam =Math.log10(am);
		var logam =Math.log(am)/Math.log(10);
		//alert(+ logam );
		var mult = 8*te ;
		//alert(+ mult);
		var logtemp =  Math.log(mult)/Math.log(10);
		//alert(+ logtemp );
		var mult1 = 3*logtemp ;
		var soma = logam+mult1 ;
		var res = soma-2.92;
		var res1 = res.toFixed(1);
		alert("a Escala é : "+ res1);

		//$("input").val(res1);
		$("#result").val(res1);
		//$("input[name='result']").val(n);


		/*if (res1 < 3.5 ){
			alert("Tremor Geralmente não sentido");
		}

		if (res1 >= 3.5 ) && (res1 <= 5.4 ) {
			alert("As vezes Sentido, mas raramente causa danos")
		}
		if (res1 >= 5.5 ) && (res1 <= 6.0 ) {
			alert("No máximo causa pequenos danos a prédios bem construidos");
		}
		if (res1 >= 6.1 ) && (res1 <= 6.9 ) {
			alert("Pode ser destrutivo em áreas em torno de ate 100km");
		}
		if (res1 >= 7.0 ) && (res1 <= 7.9 ) {
			alert("Grande terremoto");
		}
		if (res1 >= 8 )  {
			alert("Enorme terremoto");
		}*/

	});


});
