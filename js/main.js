var pais1= peru;
var pais2= mexico;
var arreglo = [];
var n1=aleatorio(pais1);
var n2=aleatorio(pais2);

$(document).ready(function(){
	$('.capital').change(function(){
		var option = $(this).val();
		if(option==1){
			picture(peru,'peru',n1);
		}else if(option==2){
			picture(mexico,'mexico',n2);
		}
	});
});

function aleatorio(b) {
  b = b.length;
  var c, d = !0;
  do {
    c = Math.round(Math.random() * (b - 1)) + 1, arreglo.length == b ? (c = -1, d = !1) : 0 == arreglo.length ? (arreglo.push(c), d = !1) : 0 > arreglo.indexOf(c) ? (arreglo.push(c), d = !1) : console.log("Repite->" + c);
  } while (d);
  return c;
}

function picture(b, c, d) {
  b = "fotos/" + c + "/" + b[d].image;
  $("#cajafotos").html("<img class='photo' src='" + b + "'/>");
}

var a = 0;
var i = 0;

function change(){
	if($('input').val()==pais1[n1].name){
		$('#texto').text('Correcto');
		a+=5;
		$('span').html(a+'puntos');
		n1=aleatorio(pais1);
		picture(peru,'peru',n1);
		clean();
	}else if($('input').val()==pais2[n2].name){
		$('#texto').text('Correcto');
		a+=5;
		$('span').html(a+'puntos');
		n2=aleatorio(pais2);
		picture(mexico,'mexico',n2);
		clean();
	}else{
		$('#texto').text('Loser!!');
		a-=1;
		$('span').html(a+'puntos');
		i++;
		if(i==5){
			n1=aleatorio(pais1);
			picture(peru,'peru',n1);
		}
		clean();
	};
};

 $('#boton').click(change);

 function clean(){
 	$('input').val("");
 }