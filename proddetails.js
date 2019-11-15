function populateProducts() {

    var e=document.getElementById("category");
    var strCategory= e.options[e.selectedIndex].value;
    var strOption="";
    var xhr= new XMLHttpRequest();
    xhr.open('GET','Category.json',true);
    xhr.responseType='text';
    xhr.send();

    xhr.onload=function(){
    if(xhr.status==200)
    {
        var data=JSON.parse(xhr.responseText);
        if(strCategory=="Electronics"){
       for(i=0;i<data.Electronics.length;i++){
            var temp="<option>"+data.Electronics[i].Product+"</option>";
            strOption=strOption+temp;
          
        }
        
    }else if(strCategory=="Grocery")
    {
        for(i=0;i<data.Grocery.length;i++)
        {
            var temp="<option>"+data.Grocery[i].Product+"</option>";
            strOption=strOption+temp;}
        }
    document.getElementById("product").innerHTML=strOption;
    }
}
}

function calculate() {
   
   var price;
   var e1=document.getElementById("product");
   var strCategorysel=e1.options[e1.selectedIndex].value;
   if(strCategory=="Electronics"){
    for(i=0;i<data.Electronics.length;i++){
        if(strCategorysel==data.Electronics[i].Product){
            price=data.Electronics[i].price;
        }
    }
    if(strCategory=="Grocery"){
        for(i=0;i<data.Grocery.length;i++){
            if(strCategorysel==data.Grocery[i].Product){
                price=data.Grocery[i].price;
            
            }
        }
        var val=price*document.getElementById("qty").value;
    document.getElementById("pc").innerHTML=val;
}

}