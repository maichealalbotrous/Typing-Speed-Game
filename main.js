

let lvl = document.querySelector(".lvl");
let seconds = document.querySelector(".seconds");
let start_btn = document.querySelector(" .start .btn");
let the_word = document.querySelector(".the_word");
let input = document.querySelector("input");
let upcoming_word = document.querySelector(".upcoming_word");
let time_span = document.querySelector(".control .time .time_left");
let score = document.querySelector(".control .score");
let got = document.querySelector(".control .got");
let finish = document.querySelector(".finish");
let plus = document.querySelector(".score .plus");




let words = 
[
    "Hello",
    "Programing",
    "Code",
    "Javascript",
    "Town",
    "country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "leetcode",
    "Internet",
    "python",
    "sacale",
    "Destructuring",
    "paradigm",
    "styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "playing",    
];



let levels = 
{
    "Easy":5,
     "Normal":3,
     "Hard":2,
}

let defulte_levels = "Normal";
let second_of_levels = levels[defulte_levels];


lvl.innerHTML = defulte_levels;
seconds.innerHTML = second_of_levels;
time_span.innerHTML = second_of_levels;
got.innerHTML = words.length;
plus.innerHTML = 0;


start_btn.addEventListener("click",function()
{
    input.focus();
    start_btn.remove();
    get_word();

})


let get_word = function()
{
    
    
   
    let random = words[Math.floor(Math.random() * words.length)];
   let random_div=document.createElement("div");
   let random_text = document.createTextNode(random);
   random_div.appendChild(random_text);
   the_word.appendChild(random_div)
    random_index = words.indexOf(random);
    words.splice(random_index,1);
      
    

    for(let i=0;i<words.length;i++)
    {
       let words_div= document.createElement("div");
        let text = document.createTextNode(words[i]);
        words_div.appendChild(text);
        upcoming_word.appendChild(words_div);
    }

    

    several();
 


}



  function several()

{
    time_span.innerHTML = second_of_levels;

    let start = setInterval(()=>{
          
    time_span.innerHTML--;


    if(time_span.innerHTML==="0")
    {
        clearInterval(start);

        if(the_word.textContent.toUpperCase() === input.value.toUpperCase())
        {
            input.value='';
            plus.innerHTML++
            
        if(words.length>0)
        {
            the_word.innerHTML = '';
            upcoming_word.innerHTML = '';
            get_word();
        }


        }
        

        else{
            let error= document.createElement("span");
            let error_text = document.createTextNode("Game_Over");
            error.appendChild(error_text);
            finish.appendChild(error);
        }



    }
 

    
},1000)
}