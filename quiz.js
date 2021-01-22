
var i=1;
var j=0;    
let questions = [
    {
        question: "A complete graph can have?",
        choiceA : "no edge",
        choiceB : "2 spanning trees",
        choiceC : "disconnected verticese",
        choiceD : "multiple loops",
        correct : "B"
    },
    {
        question : "Which type of JavaScript language is ___",
        choiceA : "Object-Oriented",
        choiceB : "Object-Based",
        choiceC : "Assembly-language",
        choiceD : "High-level",
        correct : "B"
    },{
        question : "Which one of the following also known as Conditional Expression:",
        choiceA : "Alternative to if-else",
        choiceB : "Switch statement",
        choiceC : "If-then-else statement",
        choiceD : "immediate if",
        correct : "D"
    },{
        question : "In JavaScript, what is a block of statement?",
        choiceA : "Conditional block",
        choiceB : "combines a number of statements into single compound statement",
        choiceC : "both conditional block and a single statement",
        choiceD : "block that contains a single statement",
        correct : "B"
    },
    {
        question : "When interpreter encounters an empty statements, what it will do:",
        choiceA : "Shows a warning",
        choiceB : "Prompts to complete the statement",
        choiceC : "Throws an error",
        choiceD : "Ignores the statements",
        correct : "D"
    },
    {
        question : "The 'function' and ' var' are known as:",
        choiceA : "Keywords",
        choiceB : "Data types",
        choiceC : "Declaration statements",
        choiceD : "Prototypes",
        correct : "C"
    },
    {
        question : "Which of the following variables takes precedence over the others if the names are         the same?",
        choiceA : "Global variable",
        choiceB : "The local element",
        choiceC : "The two of the above",
        choiceD : "None of the above",
        correct : "B"
    },
    {
        question : "Which one of the following is the correct way for calling the JavaScript code?",
        choiceA : "Preprocessor",
        choiceB : "Triggering Event",
        choiceC : "RMI",
        choiceD : "Function/Method",
        correct : "D"
    },
    {
        question : "Which of the following type of a variable is volatile?",
        choiceA : "Mutable variable",
        choiceB : "Dynamic variable",
        choiceC : "Volatile variable",
        choiceD : "Immutable variable",
        correct : "C"
    },
    {
        question : "When there is an indefinite or an infinite value during an arithmetic computation          in a program, then JavaScript prints______.",
        choiceA : "Prints an exception error",
        choiceB : "Prints an overflow error",
        choiceC : "Displays 'Infinity' ",
        choiceD : "Prints the value as such",
        correct : "C"
    }
];


function hideShow(){
    var val;
    var a=document.getElementById("submit");
    var b=document.getElementById("next");
    var c= document.getElementById("alert");
    var d=document.getElementById("alert-in");
    const choiceA = document.getElementById("o1");
    const choiceB = document.getElementById("o2");
    const choiceC = document.getElementById("o3");
    const choiceD = document.getElementById("o4");


     if(choiceA.checked){
     val=choiceA.value;
     
     }
     if(choiceB.checked){
     val=choiceB.value;
    
     }
     if(choiceC.checked){
     val=choiceC.value;
    
     }
     if(choiceD.checked){
     val=choiceD.value;
     }
     if(val==undefined)
     alert('Please select an option');

        
                  
        else if(val==questions[i-1].correct){
             c.removeAttribute("hidden");
             b.removeAttribute("hidden");
             a.setAttribute("hidden", true);
             choiceA.setAttribute("disabled",true);
             choiceB.setAttribute("disabled",true);
             choiceC.setAttribute("disabled",true);
             choiceD.setAttribute("disabled",true);
             j++;
                   
                   }
            else{
                   d.removeAttribute("hidden");
                   b.removeAttribute("hidden");
                   a.setAttribute("hidden", true);
                   choiceA.setAttribute("disabled",true);
                   choiceB.setAttribute("disabled",true);
                   choiceC.setAttribute("disabled",true);
                   choiceD.setAttribute("disabled",true);
                    }   
    }


document.getElementById("qtn").style.visibility="hidden";

function next(){

    var a=document.getElementById("submit");
    var b=document.getElementById("next");
    var c= document.getElementById("alert");
    var d=document.getElementById("alert-in");
    const choiceA = document.getElementById("o1");
    const choiceB = document.getElementById("o2");
    const choiceC = document.getElementById("o3");
    const choiceD = document.getElementById("o4");
    
     if(i<10)
     {document.getElementById("q").innerHTML=questions[i].question;
     document.getElementById("opt1").innerHTML=questions[i].choiceA;
     document.getElementById("opt2").innerHTML=questions[i].choiceB;
     document.getElementById("opt3").innerHTML=questions[i].choiceC;
     document.getElementById("opt4").innerHTML=questions[i].choiceD;
    

     a.removeAttribute("hidden");   
     b.setAttribute("hidden",true);
     c.setAttribute("hidden",true);
     d.setAttribute("hidden",true);
     choiceA.checked=false;
     choiceB.checked=false; 
     choiceC.checked=false;
     choiceD.checked=false;

     choiceA.removeAttribute("disabled",true);  
     choiceB.removeAttribute("disabled",true);
     choiceC.removeAttribute("disabled",true);
     choiceD.removeAttribute("disabled",true);
     i++;

     }
     else{
        document.getElementById("score").innerHTML="Score-:"+j;
        document.getElementById("qtn").setAttribute("hidden",true);
        document.getElementById("ans").style.visibility="visible";
        }
 }
