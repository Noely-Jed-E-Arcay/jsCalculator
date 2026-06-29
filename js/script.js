function calculateSum(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2)
    //Calculate Sum
    const sum = n1 + n2;

    //display the result
    document.getElementById('result').textContent='The sum is ' + sum;
}