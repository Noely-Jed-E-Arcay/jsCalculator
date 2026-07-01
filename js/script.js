function calculateSum(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);
    //Calculate Sum
    const sum = n1 + n2 + n3;

    //display the result
    document.getElementById('result').textContent='The sum is "' + sum + '"';
}

function calculateProduct(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);
    //Calculate Sum
    const product = n1 * n2 * n3;

    //display the result
    document.getElementById('result').textContent='The product is "' + product + '"';
}

function calculateQuotient(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);
    //Calculate Sum
    const quotient = n1 / n2 / n3;

    //display the result
    document.getElementById('result').textContent='The quotient is "' + quotient + '"';
}

function clear(){
    const clear = getElementById('result');
    //display the result
    document.getElementById('result').textContent=clear;
}