

	window.onload = function()
{
	var min = 1;
	var max= 5;
	var intentos = 0;
	var aleatorio = Math.floor((Math.random() * max - min + 1) + min);
	nom_div("comprueba").addEventListener('click', function(event)
	{
		intentos ++;
		if(intentos <= 5)
		{
              nom_div("intentos").innerHTML="intentos "+intentos+" DE 5";
		
			var valor = document.getElementById("adivina").value;
	        if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) 
	        {
		    	alert('digite numero'); 
		    	valor.focus();
		    	//intentos == 0;
		   		// break;
	     	}
	        else{   
	        	console.log("Número a adivinar: "+aleatorio)
	            if(valor != aleatorio)
	            {
	          	   if (valor >= min && valor <= max)
	          	   {
	                  	//if(valor < aleatorio || valor > aleatorio){
	                  		console.log(valor - aleatorio);
	                  	if(valor - aleatorio <= 2 || valor - aleatorio <= -2 )
	                  	{ 
		                  alert('Estas muy cerca'); 
	                  	} else if(valor - aleatorio < 2 || valor - aleatorio)
		                  	{
			                  	//alert("frio")
			                   	cambiar();
		                  	} 

	                 } else {
	                 	//alert('se paso del rango permitido');
	                 	cambiar2();
	                 	intentos++;
	                 }   	
	            } else {	  
                   cambiar3();
	               //  alert("ganaste") 
	            }
	     	} 
		} else {

    			alert("mejor suerte la proxima");
    			window.location ="/";
    	}

    });

function cambiar()
{
  document.getElementById("pista").innerHTML = "frio";

}
function cambiar2()
{
  document.getElementById("pista").innerHTML = "se paso";

}
function cambiar3()
{
  document.getElementById("pista").innerHTML = "ganaste";

}



	
	
	//Accedera los elementos de HTML...
	function nom_div(div)
	{
		return document.getElementById(div);
	}


}