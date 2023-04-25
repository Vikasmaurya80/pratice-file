
var allquiz = document.getElementById("allquiz")
var http = new XMLHttpRequest()
var data =[]
http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
    data = JSON.parse(this.responseText)
    for (var i = 0; i <data.length; i++) {
        // console.log(data[i].answer)
        let options='';
        for (let j = 0; j < data[i].options.length; j++) {
            
            options+=`<div class="options">
          
           <label> <input type="radio" id="inputId"  name="option${i}" value="${j+1}" > ${data[i].options[j]}</label> 
           
            </div>`
        }
        allquiz.innerHTML +=
        `
 
 <div class="divquizheading">
   <h1> ${data[i].question}</h1>
  <div>
  ${options}
  </div>

 </div>
   `
  
    }

  }

}
http.open("Get", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true)
http.send()

var res = document.getElementById("countval")
function getSelectedRadioValues() {
    var radios = document.querySelectorAll('input[type=radio]');
   
    var selectedValues = [];
  
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValues.push(radios[i].value);
        radios[i].checked = false
        console.log(radios[i])
      }
    }
     console.log(selectedValues);
    
     let correctAns =0
    for(i=0;i<selectedValues.length;i++) {
     console.log(selectedValues[i])
     console.log(data[i].answer)
     if (data[i].answer == selectedValues[i]){
         correctAns++ 
     }
    }
    res.innerHTML= correctAns;
  }

