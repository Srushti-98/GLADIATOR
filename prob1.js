function validate(){
var loan= document.getElementById('Loan').value;
var year=document.getElementById('Year').value;
var interest=document.getElementById('Interest').value;
var ci;
var Total;
var monthly;
if(loan>1500000){
    alert("Loan amount should be less than 15 lakhs");
    return false;
}
 if(!(year>7 && year<15)){
    alert("Repayment year should be between 7 and 15 ");
    return false;
}
monthly=[loan+[(interest/100)]]/(year*12);
document.getElementById('Month').value=monthly;
ci=(loan*Math.pow(1+(interest/100),year)-loan);
document.getElementById('Pay').value=ci;
Total=monthly*12*year;
document.getElementById('Total').value=Total;
}

