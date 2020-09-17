function add(){
	document.myform.txt3.value=parseInt(document.myform.txt1.value)+ parseInt(document.myform.txt2.value);
}

function sub(){
	document.myform.txt3.value=parseInt(document.myform.txt1.value)- parseInt(document.myform.txt2.value);
}

function mul(){
	document.myform.txt3.value=parseInt(document.myform.txt1.value)* parseInt(document.myform.txt2.value);
}

function div(){
	document.myform.txt3.value=parseInt(document.myform.txt1.value)/ parseInt(document.myform.txt2.value);
}

function clear1(){
	document.myform.txt1.value="";
	document.myform.txt2.value="";
	document.myform.txt3.value="";
}