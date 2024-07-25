document.addEventListener("contextmenu",function(e){
  e.preventDefault()
},false
);



function btn_main_icon() {
  const btn_main = document.querySelectorAll(".btn");
for (let i = 0; i < btn_main.length; i++) {

  setInterval(() => {
    btn_main [i].style.backgroundColor = "white";
    btn_main [i].style.color = "black";
  }, 1000);
  setInterval(() => {
    btn_main [i].style.backgroundColor = "black";
    btn_main [i].style.color = "white";
  }, 2000);
};
}

btn_main_icon();

function sms_inr() {

const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good Morning dear customers";
} else if (time < 17) {
  greeting = "Good Afternoon dear customers";
} else {
  greeting = "Good Evening dear customers";
};
const SMS = document.querySelectorAll(".SMS_FIRST");
for (let i = 0; i < SMS.length; i++) {
  SMS[i].innerHTML =  greeting
}
};
sms_inr();
//id print perr
function ORDER_ID_PREE() {
      myDate = new Date
            var hours = myDate.getHours(); 
            hours = hours % 12; 
            hours = hours ? hours : 12; 
            var minutes = myDate.getMinutes(); 
            minutes = minutes < 10 ? '0' + minutes : minutes; 
            var myTime = "सह्याद्री-" + minutes + hours + "-"
            QP.innerHTML = myTime
    } ORDER_ID_PREE()
    



//id print next
    function ORDER_ID_NEXT(){
    
    // Creating the date instance
    let d = new Date();
    
    // Adding one date to the present date
    d.setDate(d.getDate() );
    
    let year = d.getFullYear()
    let month = String(d.getMonth() + 1)
    let day = String(d.getDate())
    
    // Adding leading 0 if the day or month
    // is one digit value
    month = month.length == 1 ?
    month.padStart('2', '0') : month;
    
    day = day.length == 1 ?
    day.padStart('2', '0') : day;
    
    // Printing the present date
    QN.innerHTML = `${month}${year}${day}-QEY`;
    
    
    } ;ORDER_ID_NEXT();


    QTN.innerHTML = QP.innerHTML + QN.innerHTML;



// var query = document.getElementById("QTN")

function q_href(){
  var b1 =  document.getElementById("QTN").innerHTML;

document.getElementById("q_href").href = "https://wa.me/919834926132?text="
+ "Your query ticket NO-" + "%0a"
+ b1 + "%0a" + "%0a"
 + "write your query and  Send this SMS " 
 
};
q_href();

 
 

function C_href(){
document.getElementById("c_href").href = "https://wa.me/919834926132?text="
 + "hii...I AM CUSTEMER OF सह्याद्री कलेक्शन" 

};
C_href();
    
