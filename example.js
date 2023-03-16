JS Basics
JIT Compiler:

Parser-Interpreter(Bytecode) -  Compiler(Optimised code)

Tools :

Text Editor–VS, Sublime, Atom,etc.
Browser - all browser(executing)

ECMA: European COmputer Manufacturers Association
ES2020 (June)

Code: 
Console (Ctrl+Shift+i) [Browser]
Script Tag
External js file

var, let, const —keywords
Valid- apple_name,$address1
Invalid- 123apple,*rool,@emai

Conditional Statements-if , if else, nested if-else

Syntax:
	if(cond){
	}
	Else{}

Switch:
	switch(exp){
	Case val:...;
		Break;
	.
	.
	.
	.
	default:..;
	}

Loops:
For Loop–For Each, For of, For in 
for(initialization; termination; updation){}
//for loop
for (var num=0;num<11;num=num+2)
   console.log(num);

//for-each loop
var num =[1,2,3,4];
a.forEach(iterm=>console.log(item));

For in –to access index
For of-to access the item
//for in loop
for(var item in num)
   console.log(item);


//for of loop
for(var item of num)
   console.log(item);

While Loop
//while loop
var num=0;
while(num>5)
{
   console.log(num)
   num++; //num=num+1;
}

Do-While
	Even cond is false that will loop atleast once
	//do while loop
do {
   console.log(num);
   num++;
}while(num<5)


Operators:

Unary: (a++,++a) Increment[prefix, postfix], decrement
//unary
var itr=10;
console.log(itr++);//10
console.log(itr);//11


console.log(++itr);//12
console.log(itr);//12

Arithmetic Operator
+,-,*, **, /, %....

Relational Operators
—Left Shift, Right Shift
//relational
var num1=8,n=2;
console.log(num1<<n); //64
console.log(num1>>n);  //2

E.g.. <, >, <=, >=,==, !=, === (can stope type coercion)

Bitwise Operator
e.g.,&, |, ^, ~

Logical operators
E.g,, &&, ||, !

Assignment & Ternary Operators
Assignment Operator(=)
Ternary Operator(?:)[ alt of if else ]


Hoisting

//Hoisting
console.log(x);
var x=10;
console.log(x); //undefined 10  

console.log(x);
let x=10;
console.log(x); //cannot access a before init-- error

console.log(x);
const x=10;
console.log(x); //cannot access a before init-- error




let can=document.getElementById("table");
let draw_= can.getContext('2d');


const ball={
    x:can.width/2,
    y:can.height/2,
    radius:10,
    velX:5,
    velY:5,
    speed:5,
    color:"green"
}

const user={
    x:0,
    y:(can.height-100)/2,
    width:10,
    height:100,
    score:0,
    color:"red"
}


const cpu={
    x:can.width-10,
    y:(can.height-100)/2,
    width:10,
    height:100,
    score:0,
    color:"orange"
}

function drawRectangle(x,y,w,h,color){
    draw_.fillStyle=color;
    draw_.fillRect(x,y,w,h);
}


function drawCircle(x,y,r,color){
    draw_.fillStyle=color;
    draw_.beginPath();
    draw_.arc(x,y,r,0,Math.PI*2,true);
    draw_.closePath();
    draw_.fill();
}

function drawScore(text,x,y){
    draw_.fillStyle="white";
    draw_.font="60px Arial";
    draw_.fillText(text,x,y);
}


function drawSeparator(){
    for(let i=0;i<=can.height; i+=20){
        drawRectangle(sep.x,sep.y + i,sep.width,sep.height,sep.color);
    }
}

function helper(){
    drawRectangle(0,0,can.width,can.height, "black");
    drawScore(0,can.width/4,can.height/5);
    drawScore(0,3*can.width/4,can.height/5);
    drawSeperator();
    drawRectangle(user.x,user.y,user.width,user.height,user.color);
    drawRectangle(cpu.x,cpu.y,cpu.width,cpu.height,cpu.color);
    drawCircle(ball.x,ball.y,ball.radius,ball.color);
}

function call_back(){
    helper();
}

let fps=50;
let looper=setInterval(call_back,1000/fbs);
