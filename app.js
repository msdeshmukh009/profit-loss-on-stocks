
const priceStatus = document.querySelector("#price-status");
var purchased = document.querySelector("#purchasePrice");
var quantity = document.querySelector("#quantity");
var currently =document.querySelector("#currentPrice");
var btn = document.querySelector("#checkBtn");
var outputMsgDiv = document.querySelector("#outputMsg");
var inputForm = document.forms[0];
var formDiv = document.querySelector(".forms");
var gifs = document.querySelector(".gif")

 inputForm.addEventListener("submit",(e)=>{
     e.preventDefault();
     formDiv.classList.remove("happyTheme");
     formDiv.classList.remove("sadTheme");
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
                outputMsgDiv.innerHTML=`<div style="font-weight: bolder">You gained `+percentProfit+`% your total profit is ₹`+profit+` </div><img width="100%" height="200px"  src="img/undraw_Investing_re_bov7.svg" alt="image">`;

                if(percentProfit>50){
                    
                    formDiv.classList.add("happyTheme");
                }
                
            } else if (cp==pp){
                outputMsgDiv.innerHTML=`<p style="font-weight: bolder">Your money is at same place where you left it. No change! You gained 0.00%. Your total profit is ₹0.00</P>`;
            }else{
                //loss case current price<purchase price
                var loss = ((pp-cp)*qnt).toFixed(2);
                var percentLoss = (((pp-cp)*100)/pp).toFixed(2);
                console.log(loss,percentLoss) 
                outputMsgDiv.innerHTML=`<div style="font-weight: bolder">You lost `+percentLoss+`% your total loss is ₹`+loss+`</div><img width="100%" height="200px"  src="img/undraw_feeling_blue_4b7q.svg" alt="image"></img>`;
                if(percentLoss>50){
                    
                    formDiv.classList.add("sadTheme");
                }
            }
        }else{
            outputMsgDiv.innerHTML=`<p style="font-weight: bolder">Please enter values greater than 0</p>`
        }
    }else{
        outputMsgDiv.innerHTML=`<p style="font-weight: bolder">Only numbers are allowed in above fields</p>`
    }

 })

 function getData() {
    fetch("https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050", {
      method: "Get",
      headers: {
        "x-rapidapi-host": "latest-stock-price.p.rapidapi.com",
        "x-rapidapi-key": "e264e254b0msh67dca2c347e6f3bp1e5145jsn83f5ebf02eb8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        displayData(json);
      })
  
      .catch((err) => {
        console.error(err);
      });
  }
  getData();
  setInterval(getData, 60000);
  function displayData(data) {
    if (Number(data[0].pChange) < 0) {
      priceStatus.style.color = "red";
      priceStatus.innerHTML =
        ` <small style="display:inline; color: black;">NIFTY</small> ` +
        data[0].lastPrice +
        ` ⬇ ` +
        data[0].pChange +`% 
        <small style="display:block;color: black;">`+data[0].lastUpdateTime+`</small>`;
    } else {
      priceStatus.style.color = "green";
      priceStatus.innerHTML =
        ` <small style="display:inline; color: black;">NIFTY</small> ` +
        data[0].lastPrice +
        ` ⬆ ` +
        data[0].pChange +`% 
        <small style="display:block;color: black;">`+data[0].lastUpdateTime+`</small>`;
    }
  }
  