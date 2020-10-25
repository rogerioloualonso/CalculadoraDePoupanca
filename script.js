function no_stonks(){
  document.getElementById("stonks").src="nostonks.jpg"
}

function calc(){

    var valor_total = document.getElementById("input_valor").value
    var quant_mes = document.getElementById("input_mes").value
    var valor_inicial = document.getElementById("input_valor_inicial").value

    var juntar = valor_total - valor_inicial
    var mensal = juntar/quant_mes

    do{

      var auxiliar = valor_inicial

    for(var i = 0; i < quant_mes; i++){
        if(i == 0){
          auxiliar = mensal;
          continue;
        }
       auxiliar *= 1.0005;
       auxiliar += mensal;
    }

    if(auxiliar > valor_total){
        mensal -= 0.1;
      }
    
    }while(auxiliar > valor_total)

    mensal += 0.1;

    document.getElementById("output_mensal").value = "R$ " + mensal.toFixed(2)
}