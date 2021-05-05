window.addEventListener('load', function(){

	let nombre = prompt('¿Como te llamas?');

	document.querySelector('#nombre-jugador').innerHTML = `
	Bienvenido ${nombre}
	`;

	let contador = 0;
	let errContador = 0;

	//preguntas
	const pregunta_1 = document.querySelector('#p1');
	const pregunta_2 = document.querySelector('#p2');
	const pregunta_3 = document.querySelector('#p3');
	const pregunta_4 = document.querySelector('#p4');
	const pregunta_5 = document.querySelector('#p5');
	const pregunta_6 = document.querySelector('#p6');
	const pregunta_7 = document.querySelector('#p7');



	//botones
	const btn_responder = document.querySelector('#btn-resp');

	//tarjetas
	const card_pregunta_1 = document.querySelector('#card-pregunta-1');
	const card_pregunta_2 = document.querySelector('#card-pregunta-2');
	const card_pregunta_3 = document.querySelector('#card-pregunta-3');
	const card_pregunta_4 = document.querySelector('#card-pregunta-4');
	const card_pregunta_5 = document.querySelector('#card-pregunta-5');
	const card_pregunta_6 = document.querySelector('#card-pregunta-6');
	const card_pregunta_7 = document.querySelector('#card-pregunta-7');


	btn_responder.addEventListener('click', function(){


		//pregunta 1

		if (pregunta_1.value == 'javascript') {

			card_pregunta_1.style.backgroundColor = 'rgba(0, 184, 148,1.0)';
			card_pregunta_1.style.color = 'white';

			contador++;
		}else{
			card_pregunta_1.style.backgroundColor = 'rgba(214, 48, 49,1.0)';
			card_pregunta_1.style.color = 'white';

			document.querySelector('#mal1').innerHTML = `
				<b>La respuesta era</b>: <br> javascript
			`;

			errContador++;
		}



		//pregunta 2
		if (pregunta_2.value == 'angular') {

			card_pregunta_2.style.backgroundColor = 'rgba(0, 184, 148,1.0)';
			card_pregunta_2.style.color = 'white';

			contador++;
		}else{
			card_pregunta_2.style.backgroundColor = 'rgba(214, 48, 49,1.0)';
			card_pregunta_2.style.color = 'white';

			document.querySelector('#mal2').innerHTML = `
				<b>La respuesta era</b>: <br>
				Angular

				`;

				errContador++;
		}



		//pregunta 3
		if (pregunta_3.value == '1995') {
			card_pregunta_3.style.backgroundColor = 'rgba(0, 184, 148,1.0)';
			card_pregunta_3.style.color = 'white';

			contador++;
		}else{
			card_pregunta_3.style.backgroundColor = 'rgba(214, 48, 49,1.0)';
			card_pregunta_3.style.color = 'white';

			document.querySelector('#mal3').innerHTML = `
			 <b>La respuesta era</b>: <br>
			 1995
			`;

			errContador++;
		}



		//pregunta 4
		if (pregunta_4.value == 'tim berners lee') {
			card_pregunta_4.style.backgroundColor = 'rgba(0, 184, 148,1.0)';
			card_pregunta_4.style.color = 'white';

			contador ++;
		}else{
			card_pregunta_4.style.backgroundColor = 'rgba(214, 48, 49,1.0)';
			card_pregunta_4.style.color = 'white';

			document.querySelector('#mal4').innerHTML = `
			 <b>La respuesta era</b>: <br>
			 tim berners lee 
			`;

			errContador++;
		}



		//pregunta 5
		if (pregunta_5.value == 'lenguaje de marcado de hipertexto') {
			card_pregunta_5.style.backgroundColor = 'rgba(0, 184, 148,1.0)';
			card_pregunta_5.style.color = 'white';

			contador++;
		}else{
			card_pregunta_5.style.backgroundColor = 'rgba(214, 48, 49,1.0)';
			card_pregunta_5.style.color = 'white';

			document.querySelector('#mal5').innerHTML = `
			 <b>La respuesta era</b>: <br>
			 lenguaje de marcado de hipertexto
			`;

			errContador++;
		}



		//pregunta 6
		if (pregunta_6.value == 'hojas de estilo en cascada') {
			card_pregunta_6.style.backgroundColor = 'rgba(0, 184, 148,1.0)';
			card_pregunta_6.style.color = 'white';

			contador ++;
		}else{
			card_pregunta_6.style.backgroundColor = 'rgba(214, 48, 49,1.0)';
			card_pregunta_6.style.color = 'white';

			document.querySelector('#mal6').innerHTML = `
			 <b>La respuesta era</b>: <br>
			 hojas de estilo en cascada
			`;

			errContador++;
		}



		//pregunta 7
		if (pregunta_7.value == 'mysql') {
			card_pregunta_7.style.backgroundColor = 'rgba(0, 184, 148,1.0)';
			card_pregunta_7.style.color = 'white';

			contador ++;
		}else{
			card_pregunta_7.style.backgroundColor = 'rgba(214, 48, 49,1.0)';
			card_pregunta_7.style.color = 'white';

			document.querySelector('#mal7').innerHTML = `
			 <b>La respuesta era</b>: <br>
			 mysql
			`;

			errContador++;
		}



		$('#btn-resp').hide();


		document.querySelector('#correctas').innerHTML = `
			<p>Respuestas Correctas: <a class="btn btn-success">${contador}</a> </p>
		`;


		document.querySelector('#incorrectas').innerHTML = `
			<p>Respuestas Incorrectas: <a class="btn btn-danger">${errContador}</a> </p>
		`;

	});



});