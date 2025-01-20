window.onload = function() {

    let first = "A ";
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    
    let ex1 = Math.floor(Math.random() * who.length);
    let ex2 = Math.floor(Math.random() * action.length);
    let ex3 = Math.floor(Math.random() * what.length);
    let ex4 = Math.floor(Math.random() * when.length);
    
     document.querySelector("#excuse").innerHTML = first + who[ex1] + action[ex2] + what[ex3] + when[ex4];