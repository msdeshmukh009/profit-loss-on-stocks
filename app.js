
var purchased = document.querySelector("#purchasePrice");
var quantity = document.querySelector("#quantity");
var currently =document.querySelector("#currentPrice");
var btn = document.querySelector("#checkBtn");
var outputMsgDiv = document.querySelector("#outputMsg");
var inputForm = document.forms[0];
var formDiv = document.querySelector(".forms");
var gifs = document.querySelector(".gif")

// const profitOutput='<div>"You gained "'+percentProfit+'"% your total profit is ₹'+profit+'"</div><img width="100%" height="200px"  src="img/undraw_Investing_re_bov7.svg" alt="image">'
//const lossOutput='<div>"You lost "'+percentLoss+'"% your total loss is ₹'+loss+'"</div><img width="100%" height="200px"  src="img/undraw_feeling_blue_4b7q.svg" alt="image"></img>'

 inputForm.addEventListener("submit",(e)=>{
     e.preventDefault();
    var pp = Number(purchased.value);
    var qnt = Number(quantity.value);
    var cp = Number(currently.value);

    if( !isNaN(pp) && !isNaN(qnt) && !isNaN(cp)){
        
        if(pp>0&& qnt>0 && cp>0){
            //profit case curret price >purchase price
            if(cp>pp){
                var profit = ((cp-pp)*qnt).toFixed(2);
                var percentProfit =(((cp-pp)*100)/pp).toFixed(2);
                console.log(profit,percentProfit)
                // gifs.style.display="block"
                outputMsgDiv.innerHTML='<div>You gained '+percentProfit+'% your total profit is ₹'+profit+' </div><img width="100%" height="200px"  src="img/undraw_Investing_re_bov7.svg" alt="image">';

                if(percentProfit>50){
                    
                    formDiv.classList.add("happyTheme");
                }
                
            } else if (cp==pp){
                outputMsgDiv.innerHTML="Your money is at same place where you left it. No change! You gained 0.00%. Your total profit is ₹0.00";
            }else{
                //loss case current price<purchase price
                var loss = ((pp-cp)*qnt).toFixed(2);
                var percentLoss = (((pp-cp)*100)/pp).toFixed(2);
                console.log(loss,percentLoss) 
                outputMsgDiv.innerHTML='<div>You lost "'+percentLoss+'% your total loss is ₹'+loss+'</div><img width="100%" height="200px"  src="img/undraw_feeling_blue_4b7q.svg" alt="image"></img>';
                if(percentLoss>50){
                    
                    formDiv.classList.add("sadTheme");
                }
            }
        }else{
            outputMsgDiv.innerHTML="Please enter values greater than 0"
        }
    }else{
        outputMsgDiv.innerHTML="Only numbers are allowed in above fields)";
    }

 })
