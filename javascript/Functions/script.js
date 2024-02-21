/*var a=10
 var b=20
 console.log(a+b)
 var c=Number(prompt("enter a value"));
 var d=Number(prompt("enter a value"));
 console.log(c*d)//
 //js windows//
var a=Number(prompt("Enter a  a value"));
var b=Number(prompt("Enter a  b value"));
prompt
confirm(a+b)
alert(a+b)
alert(a-b)
alert(a*b)
alert(a/b)
//number methods//
var a=12.578
console.log(a.toFixed(2))//after point displayed 12.578=12.58
console.log(a.toPrecision(3)) //before point 12.578=13.578
console.log(a.toString(2))//1100.1001....... thise string
//Math methods//
var a=2
var b=2
var c=-353
var d=2
console.log(Math.sqrt(a))//sqre root
console.log(Math.cbrt(b))//cube root
console.log(Math.abs(c))//absult(- to +)
console.log(Math.pow(d,5))//power
console.log(Math.max(45,46))//maximum value thise is higher than values
console.log(Math.min(12.4,12.3))//minimum value thise is lower then values

//.....//
var k=7.4
console.log(Math.round(k))//ex=4.4=4,4.6=5
console.log(Math.floor(k))//les value
console.log(Math.ceil(k))//up values



//random//
var m=23
// console.log(Math.random(m))
//14.02.24// 
var str="Thise is my course"
console.log(str.split("").reverse().join(""))
//string methods//
var str='konanki'
console.log(str[4]+str[5], typeof str )
console.log(str.length)
console.log(str.split(''))
console.log(str.indexOf('i'))
console.log(str.charAt(0))
console.log(str.split("").reverse().join(""))
console.log(str.replace('konanki','narayana'))
console.log(str.toUpperCase())
var str1='NARAYANA'
console.log(str1.toLowerCase())
console.log(str1.trim)
console.log(str.substring(0,2))//substring,slice is both are same
console.log(str.slice(0,3))
//Boolean//
var x=3<4<2
console.log(x,typeof x)
console.log(4+x)
//undifind,null//
var h;
var t=null;
console.log(h,t,typeof h,typeof t) 


//15.02//

//Operators//
//unary oprerators
var a=34
console.log(a)
 a++;
 console.log(a)
a--;
console.log(a)
var b=30
var x=++b + b++ - b++ + ++b;
console.log(x)

var d=(5>2)&&(5<10) //true,false
var e=(2>2)||(23<10)

console.log(d)
console.log(e) */ 


//16.02//

function sum(a,b)
{
    console.log(a+b)
}
sum(3,5) /////

function div(a,b)
{
    console.log(a/b)
}
div(3,2)////
function mult(a,b)
{
    console.log(a*b)

}
mult(3,2)
/////
function sub(a,b)
{
    console.log(a-b)

}
sub(5,6)///

function rem(a,b)
{
    console.log(a%b)
}
rem(5,5)
///

function printmgs()
{
 console.log("Hello konanki")
}
printmgs()
//
console.log(printmgs) //function expresition//
var x=function y()
{
    console.log("Hi narayana")
}
console.log(x)
///

var sqre=function(num)
{
    return num*num 
}
console.log(sqre)
var res=sqre(5)
console.log(res)
