$(document).ready(function() {

	$("button[name='calcular']").click(function(){
        var a = parseFloat($("input[type="text"][name='ampli']").val());
        var t = parseFloat($("input[type="text"][name='tempo']").val());

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

		var logampli = Math.log10(a);
		var mult = (8*t) ;
		var logtemp =  Math.log10(mult);
		var mult1 = (3* logtemp) ;
		var soma = (logampli + mult1) ;
		var res = (soma-2.92);

		$("input[name='resultado']").val(res);


	});

});
