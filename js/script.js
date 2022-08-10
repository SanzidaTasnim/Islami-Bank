var loginButton = document.getElementById('login-button');
var main = document.getElementById('main');
var transaction = document.getElementById('transaction');
var depositButton = document.querySelector('.deposit-button');
var withdrawButton = document.querySelector('.withdraw-button');

var withdrawInput = document.querySelector('.withdraw-input');


loginButton.addEventListener('click',function(){
   main.style.display = 'none';
   transaction.style.display = 'block';
});

depositButton.addEventListener('click',function(){
   var depositInput = document.querySelector('.deposit-input').value;
   var depositValue = document.getElementById('deposit-value').innerText;
   var balanceValue = document.getElementById('balance-value').innerText;
   var depositInputNum = parseFloat(depositInput);
   var depositValueNum = parseFloat(depositValue);
   var balanceValueInput = parseFloat(balanceValue);
   var totalDeposit = depositInputNum + depositValueNum ;
   var totalBalanceDeposit = depositInputNum + balanceValueInput;
   document.getElementById('deposit-value').innerText = totalDeposit;
   document.getElementById('balance-value').innerText = totalBalanceDeposit;
   document.querySelector('.deposit-input').value = '';
});

withdrawButton.addEventListener('click',function(){
   var withdrawInput = document.querySelector('.withdraw-input').value;
   var withdrawValue = document.getElementById('withdraw-value').innerText;
   var balanceValue = document.getElementById('balance-value').innerText;
   var withdrawInputNum = parseFloat(withdrawInput);
   var withdrawValueNum = parseFloat(withdrawValue);
   var balanceValueInput = parseFloat(balanceValue);
   var totalBalanceWithdraw = -1 *  withdrawInputNum + balanceValueInput;
   var totalWithdraw = withdrawInputNum + withdrawValueNum ;
   document.getElementById('withdraw-value').innerText = totalWithdraw;
   document.getElementById('balance-value').innerText = totalBalanceWithdraw;
   document.querySelector('.withdraw-input').value = '';
})