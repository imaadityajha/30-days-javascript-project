let bitcoin = document.getElementById('bitcoin');
let ethereum = document.getElementById('ethereum');
let dogecoin = document.getElementById('dogecoin');

var setttings = {
    'async': true,
    'scrossDomain':true,
    'url' : 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
    'method' :'GET',
    'headers':{}
}

$.ajax(setttings).done(function(response){
    // console.log(response);
    bitcoin.innerHTML = response.bitcoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
})