var purchased = document.querySelector("#purchasePrice");
var quantity = document.querySelector("#quantity");
var currently =document.querySelector("#currentPrice");
var btn = document.querySelector("#checkBtn");
var outputMsgDiv = document.querySelector("#outputMsg");

function clicked(){
    var pp = purchased.value;
    var qnt = quantity.value;
    var cp = currently.value;
    if( !isNaN(pp) && !isNaN(qnt) && !isNaN(cp)){
        pp = Number(purchased);
        qnt = Number(quantity);
        cp = Number(currently);
        if(pp>0&& qnt>0 && cp>0){
            //profit case curret price >purchase price
            if(cp>pp){
                var profit = ((cp-pp)*qnt).toFixed(2);
                var percentProfit =(((cp-pp)*100)/cp).toFixed(2);
                console.log(profit,percentProfit)
                outputMsgDiv.innerHTML="You gained "+percentProfit+"% your total profit is ₹"+profit+".";
            } else if (cp==pp){
                outputMsgDiv.innerHTML="Your money is at same place where you left it. No change!";
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
