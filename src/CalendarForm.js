var listUE=[];
var listUE7 = [],
	listUE8 = [],
	listUE9 = [],
	listUE10 = [];
listUE.push(listUE7,listUE8,listUE9,listUE10);
var listidUE=[];
var listidUE7 = [],
	listidUE8 = [],
	listidUE9 = [],
	listidUE10 = [];
listidUE.push(listidUE7,listidUE8,listidUE9,listidUE10);

var sem=[7,8,9,10];

var locTalence = [];
var locCarreire = [];
var listlect = [];
var listbat = [];
var listbatmodify = [];
var myCalendar;

function initCalendar() {

	initStatus();
	//création des listes de cours

	var semcourse;
	var acro;
	var idue;
	for (var c in course_data){
		if (course_data[c].visibility==="visible"){
			ue=course_data[c].id+"-"+course_data[c].acronym;
			if (course_data[c].link){
				semcourse=course_data[course_data[c].link].semester;
				ue=course_data[c].id;
			}
			else{
				semcourse=course_data[c].semester;
			}
			sem.forEach(function putCourseinSem(el,i,sem){
				if (sem[i]==semcourse){
					listUE[i].push(ue);
					listidUE[i].push(course_data[c].acronym);
					listUE[i].sort();
					listidUE[i].sort();
				}
			})
		}		
	}	
	//création de la liste des professeurs
	var lectselect='';
	for (var lec in lecturers){
		var namelec= lecturers[lec].name;
		listlect.push(namelec);
	}
	listlect.sort();
	for (var llec in listlect){
		lectselect +='<option value="'+listlect[llec]+'">'+listlect[llec]+'</option>';
	}
	document.getElementById("lecturer").innerHTML+=lectselect;

	//remplissage des listes de dates
	var yearselect;
	var monthselect;
	var dayselect;
	var hourselect;
	var minselect;
	var year=[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030];
	for (var y=0;y<year.length;y++){
		yearselect+='<option value="'+year[y]+'">'+year[y]+'</option>';
	}

	var month=["01","02","03","04","05","06","07","08","09","10","11","12"];
	for (var mo=0;mo<month.length;mo++){
		monthselect+='<option value="'+month[mo]+'">'+month[mo]+'</option>';
	}
	var day=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
	for (var d=0;d<day.length;d++){
		dayselect+='<option value="'+day[d]+'">'+day[d]+'</option>';
	}
	var hour=["00","08","09","10","11","12","13","14","15","16","17","18","19"];
	for (var h=0;h<hour.length;h++){
		hourselect+='<option value="'+hour[h]+'">'+hour[h]+'</option>';
	}
	var minute=["00","15","30","45"];
	for (var min=0;min<minute.length;min++){
		minselect+='<option value="'+minute[min]+'">'+minute[min]+'</option>';
	}
	document.getElementById("startYearevent").innerHTML+=yearselect;
	document.getElementById("startMonthevent").innerHTML+=monthselect;
	document.getElementById("startDayevent").innerHTML+=dayselect;
	document.getElementById("startHourevent").innerHTML+=hourselect;
	document.getElementById("startMinevent").innerHTML+=minselect;
	document.getElementById("endYearevent").innerHTML+=yearselect;
	document.getElementById("endMonthevent").innerHTML+=monthselect;
	document.getElementById("endDayevent").innerHTML+=dayselect;
	document.getElementById("endHourevent").innerHTML+=hourselect;
	document.getElementById("endMinevent").innerHTML+=minselect;
	document.getElementById("startYear").innerHTML+=yearselect;
	document.getElementById("startMonth").innerHTML+=monthselect;
	document.getElementById("startDay").innerHTML+=dayselect;
	document.getElementById("startHour").innerHTML+=hourselect;
	document.getElementById("startMin").innerHTML+=minselect;
	document.getElementById("endYear").innerHTML+=yearselect;
	document.getElementById("endMonth").innerHTML+=monthselect;
	document.getElementById("endDay").innerHTML+=dayselect;
	document.getElementById("endHour").innerHTML+=hourselect;
	document.getElementById("endMin").innerHTML+=minselect;

	//mise à la date du jour
	var date = new Date();
	startYearevent.value=date.getFullYear().toString();
	startMonthevent.value=("0" + (date.getMonth()+1)).slice(-2);
	startDayevent.value=("0" + (date.getDate())).slice(-2);
	endYearevent.value=date.getFullYear().toString();
	endMonthevent.value=month[date.getMonth()];
	endDayevent.value=("0" + (date.getDate())).slice(-2);
	startYear.value=date.getFullYear().toString();
	startMonth.value=("0" + (date.getMonth()+1)).slice(-2);
	startDay.value=("0" + (date.getDate())).slice(-2);
	endYear.value=date.getFullYear().toString();
	endMonth.value=month[date.getMonth()];
	endDay.value=("0" + (date.getDate())).slice(-2);

	//création de la liste des lieux
	var locselect='';
	for (var l in locations){
		var nameloc= locations[l].name;
		locselect +='<option value="'+nameloc+'">'+nameloc+'</option>';
		if(locations[l].type !=="bat"){
			listbat.push(nameloc);
		}
	}
	document.getElementById("location").innerHTML+=locselect;
	document.getElementById("locationevent").innerHTML+=locselect;

	//création de la liste des groupes
	var groupselect='';
	for (var g in groups){
		var namegroup= groups[g].name;
		groupselect +='<option value="'+namegroup+'">'+namegroup+'</option>';
	}
	document.getElementById("groups").innerHTML+=groupselect;

	//création de la liste des parcours
	var parselect='';
	for (var g in parcours){
		var namepar= parcours[g].name;
		var typepar= parcours[g].value;
		parselect +=' <input type="checkbox" name="'+namepar+'" id="'+namepar+'" value="'+typepar+'" checked /> <label for="'+namepar+'">'+namepar+'</label>';
	}	
	document.getElementById("parcours").innerHTML+=parselect;
	getCalendarJSON();
}

function initStatus(){
	window.location.search.substr(1).split("&").forEach(function ( v,i,arr) {
		tmp=v.split("=");
	if(tmp[0]==="status" && tmp[1]==="1"){
		updatePage(1);
		}
	});
}

function updatePage(stat){
	if(stat===1)
	{
		document.getElementById("auth").style.visibility="hidden";
		var githubauth='Vous êtes connecté à Github';
		document.getElementById("connect").style.visibility="visible";
		document.getElementById("connect").innerHTML=githubauth;
	}
	else
	{
		document.getElementById("auth").style.visibility="visible";
		document.getElementById("connect").style.visibility="hidden";
	}
}

function getCalendarJSON(){
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        	myCalendar = JSON.parse(xhr.responseText); // Données textuelles récupérées
        	updateCalendarDisplay(myCalendar);
        }

    };
    xhr.open("GET", "http://master-bioinfo-bordeaux.github.io/data/test.json", true);
    xhr.send(null);
}

function updateCalendarDisplay() {
	document.getElementById("listForModifycal").innerHTML='';
	document.getElementById("listForDeletioncal").innerHTML='';
	var listmodify='';
	var listdelete='';
	for(var n in myCalendar){
		var years= myCalendar[n]["date_start"].substring(0,4);
		var months= myCalendar[n]["date_start"].substring(4,6);
		var days=myCalendar[n]["date_start"].substring(6,8);
		if (myCalendar[n]["date_start"].length>8)
		{
			var hours=" "+myCalendar[n]["date_start"].substring(9,11)+"h";
			var mins=myCalendar[n]["date_start"].substring(11,13)+" ";
		}
		else
		{
			var hours='';
			var mins='';
		}
		var datestart=years+"/"+months+"/"+days+hours+mins; 

		var yeare = myCalendar[n]["date_end"].substring(0,4);
		var monthe= myCalendar[n]["date_end"].substring(4,6);
		var daye=myCalendar[n]["date_end"].substring(6,8);
		if (myCalendar[n]["date_end"].length>8)
		{
			var houre=" "+myCalendar[n]["date_end"].substring(9,11)+"h";
			var mine=myCalendar[n]["date_end"].substring(11,13)+" ";
		}
		else
		{
			var houre='';
			var mine='';
		}
		var dateend=yeare+"/"+monthe+"/"+daye+houre+mine; 
		listmodify+='<input type="radio" name="titlecalmod" id="'+myCalendar[n]["ID"]+'" class="titlecalmod"/>'+myCalendar[n]["comment"]+'-'+datestart+'-'+dateend+'<br />'; 
		listdelete+='<input type="radio" name="titlecalmod" id="'+myCalendar[n]["ID"]+'" class="titlecalmod"/>'+myCalendar[n]["comment"]+'-'+datestart+'-'+dateend+'<br />'; 	
	document.getElementById("listForModifycal").innerHTML=listmodify;
	document.getElementById("listForDeletioncal").innerHTML=listdelete;
	}
}

function selectUE(){
	var semc=document.getElementById('semester').value;
	semc=parseInt(semc);
	var listUEc,listisUEc;

	sem.forEach(function putCourseinSem(el,i,sem){
		if (sem[i]==semc){
			listUEc=listUE[i];
			listidUEc=listidUE7[i];
				}
			})
	var html ='<h3>UE</h3>     <select name="uesemester" id="uesemester"">';
	for (var m=0;m<listUEc.length;m++){
		html += '<option value="'+listUEc[m]+'" data-acronym="'+listidUEc[m]+'" >'+listUEc[m]+'</option>';
		
	}
	html += '</select>';
	html += '<select name="typecourse" id="typecourse">';
	html += '<option value="Cours/TD" selected>Cours/TD</option>'
	html += '<option value="Cours">Cours</option>';
	html += '<option value="TD">TD</option>';
    html += '<option value="TP">TP</option>';
    html += '<option value="Examen">Examen</option>'
    html += '</select>';
	document.getElementById("ue").innerHTML = html;
}

function selectRoom(){
	var loc=document.getElementById('location').value;
	for (var l=0;l<listbat.length;l++){
		if (loc===listbat[l]){
			var html=' ';
		}
		else{
			var html='<h3>Room</h3>     <input type="text" name="room" id="room" required/>';
		}
		document.getElementById("rooms").innerHTML=html;
	}
}

function selectRoomEvent(){
	var loc=document.getElementById('locationevent').value;
	for (var l=0;l<listbat.length;l++){
		if (loc===listbat[l]){
			var html=' ';
		}
		else{
			var html='<h3>Room</h3>     <input type="text" name="roomevent" id="roomevent" required/>';
		}
		document.getElementById("roomsevent").innerHTML=html;
	}
}

function createCalendarCourse(){

	var newCourse={};

	var summary=document.getElementById("uesemester");
	newCourse.comment=summary.options[summary.selectedIndex].getAttribute("data-acronym"); //récupération de l'acronyme pour le titre

	var sum=summary.value.split("-");

	semcourse=course_data[sum[0]].semester;

	//création de l'ID
	//extraction de l'année (M1 ou M2) via le semestre
	var sem=document.getElementById("semester").value;

	if (sem===7 || sem===8){
		var year=1;
	}
	else{
		var year=2;
	}
	newCourse.type=document.getElementById("typecourse").value;
	//extraction de l'auteur de la news (à changer par utilisateur GitHub)
	var author=document.getElementById("author").value;
	//extraction de la date de création
	var datecrea = new Date();
	var cday = ("0" + (datecrea.getDate())).slice(-2);
	var cmonth = ("0" + (datecrea.getMonth()+1)).slice(-2);
	var cyear = datecrea.getFullYear().toString();
	var chour = ("0" + (datecrea.getHours())).slice(-2);
	var cmin = ("0" + (datecrea.getMinutes())).slice(-2);
	var csec = ("0" + (datecrea.getSeconds())).slice(-2);
	var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;
	//extraction de la somme des valeurs des parcours ayant ce cours


	var stu=course_data[sum[0]].students; //sauvegarde de l'ID puis recherche des étudiants pour cette UE

	var stusplit = stu.split(","); //séparation des différents groupes

	var parc=[];
	for (var i in stusplit){
		var parca = stusplit[i].split("[");	
		parc.push(parca[0]); //récupération des noms de groupes seuls
	}
	// var sum=0;
	// for(var p in parc){
	// 	sum=sum+parcours[p].value; //addition des valeurs des groupes
	// }
	// var sumsum=(sum.toString(16))
	// if (sumsum==="f"){
		sumsum="F" //passage de la valeur en hexadecimal
	// }
		//ajout dans l'objet de l'ID et du summary
		newCourse.id = "C"+year+sumsum+creadate+"@"+author;
		newCourse.summary=document.getElementById("uesemester").value;

	//extraction de la date de début et de la date de fin du cours
	var yearstart=document.getElementById("startYear").value;
	var monthstart=document.getElementById("startMonth").value;
	var daystart=document.getElementById("startDay").value;
	var hourstart=document.getElementById("startHour").value;
	var minstart=document.getElementById("startMin").value;
	if ((hourstart===00 && minstart===00) || (allday.checked) ){
		var hourstart="00";
		var minstart="00";
		var yearend=yearstart;
		var monthend=monthstart;
		var dayend=daystart;
		var hourend=23;
		var minend=59;
	}
	else{
		var yearend=document.getElementById("endYear").value;
		var monthend=document.getElementById("endMonth").value;
		var dayend=document.getElementById("endDay").value;
		var hourend=document.getElementById("endHour").value;
		var minend=document.getElementById("endMin").value;		
	}
	newCourse.date_start=yearstart+monthstart+daystart+"T"+hourstart+minstart;
	newCourse.date_end=yearend+monthend+dayend+"T"+hourend+minend;

	//extraction des groupes d'étudiants concernés (hors parcours)
	newCourse.group=document.getElementById("groups").value;

	//extracteur du professeur 
	newCourse.lecturer=document.getElementById("lecturer").value;

	//extraction du lieu du cours
	var bat=document.getElementById("location").value;
	if (locations[bat].type!=="bat"){
		newCourse.location=bat;
	}
	else{
		var room=document.getElementById("room").value;
		newCourse.location="room"+room+"@"+bat;
	}

	//extraction de la description du cours
	newCourse.description=document.getElementById("content").value;

	console.log(newCourse);
	//passage de l'objet js en JSON

	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "/createcourse", true);
  	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

 	 // send the collected data as JSON
  	xhr.send(JSON.stringify(newCourse));
  	xhr.onreadystatechange = function () {
  		console.log("End");
	}
};

function createCalendarEvent(){

	var newEvent={};

	//création de l'ID
		//extraction de l'auteur de l'event (à remplacer par l'utilisateur GitHub)
		var author=document.getElementById("authorgitevent").value;
		//extraction de la date de création
		var datecrea = new Date();
		var cday = ("0" + (datecrea.getDate())).slice(-2);
		var cmonth = ("0" + (datecrea.getMonth()+1)).slice(-2);
		var cyear = datecrea.getFullYear().toString();
		var chour = ("0" + (datecrea.getHours())).slice(-2);
		var cmin = ("0" + (datecrea.getMinutes())).slice(-2);
		var csec = ("0" + (datecrea.getSeconds())).slice(-2);
		var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;
		//extraction de l'année concernée (M1 ou M2)
		var year = document.getElementById("yearstudy").value;
		//extraction des parcours concernés
		var sum=0;
	var checkboxes = document.getElementById("parcours").getElementsByTagName("input"); //extraction des différents input de l'ID (ici que checkboxes)
	for (var i = 0, iMax = checkboxes.length; i < iMax; ++i) {
   		var check = checkboxes[i]; //séparation de chacune des checkboxes
   		if (check.type == "checkbox" && check.checked) {
   			sumnum=parseInt(check.value) 
   			sum=sum+sumnum; //si coché, extraction de la valeur du parcours puis addition de cette valeur avec la somme des précédentes
   		}
   	}
	var sumsum=(sum.toString(16)) //passage en hexadécimal
	if (sumsum==="f"){
		sumsum="F" 
	}
		//creation de l'ID à partir des données extraites
		newEvent.id = "M"+year+sumsum+creadate+"@"+author;

	//extraction du titre
	newEvent.summary=document.getElementById("summaryevent").value;

	//extraction de la date de début et de fin de l'event
	var yearstart=document.getElementById("startYearevent").value;
	var monthstart=document.getElementById("startMonthevent").value;
	var daystart=document.getElementById("startDayevent").value;
	var hourstart=document.getElementById("startHourevent").value;
	var minstart=document.getElementById("startMinevent").value;
	if ((hourstart==="00" && minstart==="00") || (alldayevent.checked) ){
		var hourstart="00";
		var minstart="00";
		var yearend=yearstart;
		var monthend=monthstart;
		var dayend=daystart;
		var hourend=23;
		var minend=59;
	}
	else{
		var yearend=document.getElementById("endYearevent").value;
		var monthend=document.getElementById("endMonthevent").value;
		var dayend=document.getElementById("endDayevent").value;
		var hourend=document.getElementById("endHourevent").value;
		var minend=document.getElementById("endMinevent").value;		
	}
	newEvent.date_start=yearstart+monthstart+daystart+"T"+hourstart+minstart;
	newEvent.date_end=yearend+monthend+dayend+"T"+hourend+minend;

	//extraction de la personne faisant l'événement
	newEvent.lecturer=document.getElementById("lecturerevent").value;

	//extraction du lieu 
	var bat=document.getElementById("locationevent").value;
	if (locations[bat].type!=="bat"){
		newEvent.location=bat;
	}
	else{
		var room=document.getElementById("roomevent").value;
		newEvent.location="room"+room+"@"+bat;
	}

	//extraction de la description
	newEvent.description=document.getElementById("contentevent").value;

	//extraction des étudiants concernés
		//extraction de l'année concernée
		newEvent.year=document.getElementById("yearstudy").value;
		//extraction du(des) parcours concerné(s)
	var checkboxes = document.getElementById("parcours").getElementsByTagName("input");//extraction des différents input de l'ID (ici que checkboxes)
	var partot=[];
	for (var i = 0, iMax = checkboxes.length; i < iMax; ++i) {
  		var check = checkboxes[i]; //séparation de chacune des checkboxes
  		if (check.type == "checkbox" && check.checked) {
  			partot.push(check.name);
  		}
  	}
  	newEvent.students=partot.toString();

   	//extraction de l'obligation ou non d'assister à l'event
   	newEvent.presence=document.getElementById("choice").value;

   	summary=document.getElementById("summaryevent").value;
   	if (summary.length >=10){
   		newEvent.comment=document.getElementById("summaryevent").value.substring(0,11);
   	}
   	else{
   		newEvent.comment=document.getElementById("summaryevent").value;
   	}

   	console.log(newEvent);

   	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "/createevent", true);
  	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

 	 // send the collected data as JSON
  	xhr.send(JSON.stringify(newEvent));
  	xhr.onreadystatechange = function () {
	}
   }



function deleteCalendar(){
   	var nbtitles = document.getElementsByClassName("titlecaldel");
   	for (var i = 0; i< nbtitles.length; i++)
   	{
   		if (nbtitles[i].checked)
   		{
   			var ID=nbtitles[i]["id"];
   			delete myCalendar[ID];
   		}
   	}
   	getCalendarJSON();
}
