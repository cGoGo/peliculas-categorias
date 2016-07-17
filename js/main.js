$(document).ready(function(){
	$(".form-control").change(function(){
		var seleccion = $(".form-control").val();
		var categoria = "." + seleccion;
		$(categoria).fadeIn(900);
		$(".todos").not(categoria).fadeOut(900);
	});
});
/* NO PUDE LLAMAR A UNA IMAGEN ESPECIFICA
	$(".img-responsive").click(function(){
		var attrPel = $(".img-responsive").attr("data-target");
		alert("probando " + attrPel);
	});
var peliculas = [{
	titulo: "Annabelle",
	descripcion: "Annabelle es una película estadounidense de terror dirigida por John R. Leonetti y escrita por Gary Dauberman. Se trata de una precuela y un \"spin-off\" de la película: El conjuro. Está protagonizada por <b>Annabelle Wallis</b> y <b>Ward Horton</b>. Se estrenó el 3 de octubre de 2014 en Estados Unidos.",
	reparto1: "http://withoutmakeup.org/wp-content/uploads/2016/04/Annabelle-Wallis-150x150.jpg",
	reparto2: "http://images.commeaucinema.com/news/150_328385.jpg",
	trailer: "https://www.youtube.com/embed/8kmLHwKH31M"
	},{
	
	titulo: "El Conjuro 2",
	descripcion: "Es una película estadounidense perteneciente al género de terror dirigida por James Wan. Es la secuela de la película de terror El Conjuro, que fue lanzada el 19 de julio de 2013. <b>Patrick Wilson</b> y <b>Vera Farmiga</b> repiten sus papeles como el matrimonio de investigadores paranormales Ed y Lorraine Warren.",
	reparto1: "http://withoutmakeup.org/wp-content/uploads/2015/10/Vera-Farmiga-Without-Makeup-150x150.jpg",
	reparto2: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/13561985_1319142694782101_884154066_a.jpg",
	trailer: "https://www.youtube.com/embed/hdwyVF97hgY"
	},{
	titulo: "Buscando a Dory",
	descripcion: "Buscando a Dory es una película estadounidense en animación 3D por ordenador. Es la secuela de Buscando a Nemo, también es distribuida por Walt Disney Pictures y producida por Pixar y dirigida por Andrew Stanton, que dirigió la película original, y regresó como escritor y director, junto a Angus MacLane como el codirector.2 3 Su estreno fue el día 16 de junio de 2016. Volvieron a aparecer algunos personajes de la película anterior, además de Dory están Nemo, Marlin y la pandilla del acuario.",
	reparto1: "",
	reparto2: "",
	trailer: "https://www.youtube.com/embed/3zoXVQ4g7Y8"
	},{
	titulo: "Duro de Matar",
	descripcion: "Duro de matar, es una película de acción estadounidense de 1988 dirigida por John McTiernan y escrita por Steve de Souza y Jeb Stuart, basada en la novela Nothing Lasts Forever de Roderick Thorp, publicada en 1979. Sigue al oficial fuera de servicio del Departamento de Policía de Nueva York John McClane mientras se enfrenta a un grupo de criminales altamente organizados liderados por Hans Gruber, que realizan un atraco en un rascacielos de Los Angeles bajo el pretexto de un ataque terrorista utilizando a rehenes, incluyendo a la esposa de McClane, para mantener a raya a la policía.",
	reparto1: "https://baldingblog.com/photos/060302_brucewillis.jpg",
	reparto2: "http://my.xfinity.com/blogs/tv/files/2010/02/150-parenthood-bonnie.jpg",
	trailer: "https://www.youtube.com/embed/_77FtiLPFLM"
	},{
	titulo: "Una esposa de mentiras",
	descripcion: "Danny (Adam Sandler) es un exitoso cirujano plástico que finge ser un infeliz marido para ligar con mujeres. Cuando finalmente conoce a una chica llamada Palmer de la que se enamora, y tras acostarse juntos ella descubre la alianza de boda que él utiliza. Por miedo de decirle la verdad (y como ha hecho desde hacia varios años), él le dice que está en proceso de divorcio, a lo que ella le responde que quiere conocer a su futura ex-esposa. Así que Danny le pide a su ayudante, Katherine, que se haga pasar por su esposa con el fin de probar su historia, pero una mentira se convierte en otra, lo que lleva a los niños de Katherine al embrollo. Finalmente en un viaje a Hawái todos cambiarán sus vidas.",
	reparto1: "http://whosdatedwho.net/wp-content/uploads/2016/01/Adam-Sandler-150x150.jpg",
	reparto2: "http://quienes.info/wp-content/uploads/2015/11/Jennifer-150x150.jpg",
	trailer: "https://www.youtube.com/embed/Q_kkTZG3mBw"
	},{
	titulo: "Un gran Dinosaurio",
	descripcion: "¿Qué hubiera ocurrido si el asteroide que cambió para siempre la vida en la Tierra no hubiera impactado contra el planeta y los dinosaurios jamás se hubieran extinguido? Pixar Animation Studios te lleva en un viaje extraordinario al mundo de los dinosaurios, donde un Apatosaurio llamado Arlo gana un compañero bastante improbable en el camino: un niño humano. Mientras viaja a través de un paisaje montañoso y misterioso, Arlo aprende a confrontar sus temores y descubre lo que realmente es capaz de hacer",
	reparto1: "",
	reparto2: "",
	trailer: "https://www.youtube.com/embed/6CQs9AGEjlU"
	},{
	titulo: "La isla siniestra",
	descripcion: "Es una película de suspense de 2010 dirigida por Martin Scorsese y protagonizada por Leonardo DiCaprio. La producción está basada en la novela homónima escrita por Dennis Lehane. La historia cuenta la investigación de dos agentes federales enviados a una institución mental llamada Shutter Island, con el fin de buscar a Rachel Solando, una paciente psicótica que ha escapado misteriosamente de su celda. Daniels (DiCaprio) tiene además en su mente los recuerdos del campo de concentración de Dachau.",
	reparto1: "http://entretenimiento.starmedia.com/imagenes/2016/03/Leonardo-DiCaprio-150x150.png",
	reparto2: "http://frostsnow.com/assets/thumbnails/14/14c05149f0e95e93fac675b403d42615.jpg",
	trailer"
	},{
	titulo: "Mentiroso Mentiroso",
	descripcion: "Fletcher Reede es un joven y extrovertido abogado cuyo secreto para ganar todos los casos es mentir. Haciendo gala de una habilidad portentosa ligada a la verdad para defender a su cliente, Fletcher siempre se las apaña para acabar haciendo todo lo contrario sin que nadie se dé cuenta. Este don de la mentira lo ejerce tanto en el campo profesional como en el personal, razón por la cual su mujer, Audry (Maura Tierney), se ha divorciado de él.",
	reparto1: "https://www.looktothestars.org/photo/498-jim-carrey/teaser-1379527674.jpg",
	reparto2: "http://musicacinetv.com/page/wp-content/uploads/2016/02/Maura-Tierney-150x150.jpg",
	trailer: "https://www.youtube.com/embed/R-uyv-kKo64"
	},{
	titulo: "Mision Imposible",
	descripcion: "La característica de las misiones de este equipo de espías es que serían prácticamente imposibles para cualquier grupo común de agentes. Las misiones son inverosímiles y los agentes se convierten en superagentes. En esta versión, el grupo de agentes ultrasecretos debe recuperar un disco para computadora que tiene importante información para el gobierno. En el intento mueren varios agentes y el protagonista de la película es acusado de su muerte. Además de intentar recuperar el material robado, el agente Ethan Hunt, protagonizado por Tom Cruise, deberá probar su inocencia.",
	reparto1: "http://dondeycuanto.com/wp-content/uploads/2016/01/cuanto-mide-tom-cruise-150x150.jpg",
	reparto2: "http://www.crazywallpapers.xyz/wp-content/uploads/2016/06/emmanuelle-beart-daniel-auteuil-150x150.jpg",
	trailer: "https://www.youtube.com/embed/QBavzf2_ook"
	},{
	titulo: "Ponyo",
	descripcion: "Es una película de animación japonesa del estudio de animación 
	Studio Ghibli, escrita y dirigida por Hayao Miyazaki, director de La 
	princesa Mononoke, El viaje de Chihiro y El castillo ambulante. Se trata 
	de la octava producción dirigida por Miyazaki con Ghibli y la decimoséptima 
	del estudio. Esta película fue presentada el 27 de junio de 2008 en los 
	cines japoneses e hizo su debut en el Festival de Cine de Venecia a finales 
	de agosto de 2008 convirtiéndose en una de las favoritas para el León de Oro. 
	En España se estrenó en los cines el 24 de abril de 2009 mediante la 
	distribuidora española eOne Films.",
	reparto1: "",
	reparto2: "",
	trailer: "https://www.youtube.com/embed/GNzdX3YWWs4"
	},{
	titulo: "EL silecio de los corderos",
	descripcion: "Es una película estadounidense de 1991 de género thriller, 
	que combina tintes de crimen y terror. Fue dirigida por Jonathan Demme y 
	presenta a Jodie Foster, Anthony Hopkins y Scott Glenn en los papeles 
	principales. La película está basada en la novela homónima de Thomas Harris, 
	escrita en 1988 como secuela de El dragón rojo (1981), del mismo autor, que 
	relata la historia de Hannibal Lecter, un brillante psiquiatra y a la vez 
	asesino en serie y caníbal.",
	reparto1: "http://hdpics.co/wp-content/uploads/2016/05/Jodie-foster-3-150x150.jpg",
	reparto2: "http://frostsnow.com/assets/thumbnails/98/98b79c755daff16d5cc467e6be9cf7b8.jpg",
	trailer: "https://www.youtube.com/embed/__0EAB-Fl0s"
	}
];*/