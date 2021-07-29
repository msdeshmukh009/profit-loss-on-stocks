var purchased = document.querySelector("#purchasePrice");
var quantity = document.querySelector("#quantity");
var currently =document.querySelector("#currentPrice");
var btn = document.querySelector("#checkBtn");
var outputMsgDiv = document.querySelector("#outputMsg");
var gifs = document.querySelector(".gif")

function clicked(){
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
                gifs.style.display="block"
                outputMsgDiv.innerHTML="You gained "+percentProfit+"% your total profit is ₹"+profit+".";

                if(percentProfit>50){
                    
                    main.classList.add("happyTheme");
                }
                
            } else if (cp==pp){
                outputMsgDiv.innerHTML="Your money is at same place where you left it. No change! You gained 0.00%. Your total profit is ₹0.00";
            }else{
                //loss case current price<purchase price
                var loss = ((pp-cp)*qnt).toFixed(2);
                var percentLoss = (((pp-cp)*100)/pp).toFixed(2);
                console.log(loss,percentLoss) 
                outputMsgDiv.innerHTML="You gained "+percentLoss+"% your total profit is ₹"+loss+".";
            }
        }else{
            outputMsgDiv.innerHTML="Please enter values greater than 0 (only numbers are allowed in above fields)"
        }
    }else{
        outputMsgDiv.innerHTML="Please enter values greater than 0 (only numbers are allowed in above fields)";
    }
}

 btn.addEventListener("click",clicked)
