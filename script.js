const slider1 = document.getElementById("kreditaRange");
const slider2 = document.getElementById("iemaksaRange");
const slider3 = document.getElementById("terminsRange");
const slider4 = document.getElementById("procentiRange");
const output1 = document.getElementById("demo1");
const output2 = document.getElementById("demo2");
const output3 = document.getElementById("demo3");

const input1 = document.getElementById("kreditaInput");
const input2 = document.getElementById("iemaksaInput");
const input3 = document.getElementById("terminsInput");
const input4 = document.getElementById("procentiInput");


let button = document.getElementById("butt1");
let error = document.getElementById("error");
let error2 = document.getElementById("errorFill");




const showError = () => error.classList.add("show");

const errorFill = () => error2.classList.add("reveal");

const ClearErrorMessages = () => {
	error.classList.remove("show");
	error2.classList.remove("reveal");
	
};

const percentage = () => {
	output1.value = Number(input2.value / 100 * input1.value).toFixed(2);
	output1.innerHTML = output1.value;
};

const monthly = () => {
	let sum = input1.value - output1.value;
	let	i = input4.value / 1200;
	let	n = input3.value;
	if((sum > 0) && (i > 0) && (n > 0) && (input2.value > 0)) {
		menesaMaksa = (sum * i) / (1 - Math.pow(1 + i, -n));
		kopejaSumma = (menesaMaksa * n).toFixed(2);
		output2.innerHTML = (menesaMaksa).toFixed(2);
		output3.innerHTML = kopejaSumma;
	} else {
		output2.innerHTML = 0;
		output3.innerHTML = 0;
	}
};

//  I KREDITA DAĻA

percentage();
monthly();

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  ClearErrorMessages();
  input1.value = this.value;
  percentage();
  monthly();
};


input1.onkeyup = function(e) {
	ClearErrorMessages();
	this.value = input1.value.replace(/^(0*)/,"");
	if(input1.value >= 1 && input1.value <= 10000) {
		slider1.value = input1.value;
	} else if(input1.value.length === 0) {
		errorFill();
		input1.value = null;
	} else {
		showError();
		input1.value = null;
	}
	if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
     )) {
       		return false;
     	}
  	percentage();
  	monthly();  	
};


// II IEMAKSAS DAĻA



slider2.oninput = function() {
  ClearErrorMessages();
  input2.value = this.value;
  percentage();
  monthly();
};

input2.onkeyup = function(e) {
	ClearErrorMessages();
	this.value = input2.value.replace(/^(0*)/,"");
	if(input2.value >= 1 && input2.value <= 100) {
		slider2.value = input2.value;
		percentage();
		monthly();
	} else if(input2.value.length === 0) {
		errorFill();
		input2.value = null;
	} else {
		showError();
		input2.value = null;
	} 
	if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
     )) {
        return false;
        }
      	percentage();
  		monthly();  
};


//   III Atmaksas termiņš



slider3.oninput = function() {
  ClearErrorMessages();
  input3.value = this.value;
  monthly();
};

input3.onkeyup = function(e) {
	ClearErrorMessages();
	this.value = input3.value.replace(/^(0*)/,"");
	if(input3.value >= 12 && input3.value <= 60) {
		slider3.value = input3.value;
	} else if(input3.value.length === 0) {
		errorFill();
	} else {
		showError();
	} 
	if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
     )) {
        return false;
        }
    monthly();  
};






//  PROCENTU LIKME



slider4.oninput = function() {
  ClearErrorMessages();
  input4.value = this.value;
  monthly();
};

input4.onkeyup = function(e) {
	ClearErrorMessages();
	this.value = input4.value.replace(/^(0*)/,"");
	if(input4.value >= 2 && input4.value <= 10) {
		slider4.value = input4.value;
		monthly();
	} else if(input4.value.length === 0) {
		errorFill();
	} else {
		showError();
	} 
	if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
     )) {
        return false;
        }
  	monthly();
};
