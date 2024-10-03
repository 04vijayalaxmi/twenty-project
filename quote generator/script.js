let btn=document.getElementById('btn');
letoutput=document.getElementById('output');
let quote= ['"The pessimist sees Difficulty In Every Opputunity.Tje optimist sees Opprtunity In Every Diificulty- Winston churcheli"',
    ' “Imagination is more important than knowledge.- Albert Einstein"', 
    '“Do not go where the path may lead, go instead where there   is no path and leave a trail. Ralph Waldo Emerson"',
      '“It does not matter how slowly you go as long as you do not stop. Confucius"',
'“I have a dream.-Martin Luther King Jr"',' “Success is not final, failure is not fatal: It is the courage to continue that counts.- Winston Churchill"'];

btn.addEventListener('click',function(){
    var randomQuote=quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML=randomQuote;
})

 

