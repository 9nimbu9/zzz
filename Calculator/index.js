var oldValue=[]
var operation=[]
var o = ["+","-","/","*"]
var firstNumber="true"  

function number()
{
    $(".number").click(function(){
        var n = this.innerHTML
        oldValue.push(n)
        $(".display").text(n)
        console.log(oldValue)
    })
}
number()

function storeOperation()
{
    $(".operation").click(function()
    {
        var k = this.innerHTML
        operation.push(k)
        console.log(operation)
        return k
    })
}
storeOperation()

function calculate()
{
    $(".addition").click(function(){
        $(".equal").click(function(){$(".display").text(add())})
        $(".display").text(add())
    })

    $(".subtract").click(function(){
        $(".equal").click(function(){$(".display").text(subtract())})
        $(".display").text(subtract())
    })

    $(".multiply").click(function(){
        $(".equal").click(function(){$(".display").text(multiply())})
        $(".display").text(multiply())
    })

    $(".divide").click(function(){
        $(".equal").click(function(){$(".display").text(divide())})
        $(".display").text(divide())
    })      
}
$(".operation").click(calculate())

function add()
{
    var l = oldValue.length-1
    sum=0
    sum=Number(oldValue[l-1])+Number(oldValue[l])
    oldValue.push(sum)
    return sum
}

function subtract()
{
    var l = oldValue.length-1
    sum=0
    sum=Number(oldValue[l-1])-Number(oldValue[l])
    oldValue.push(sum)
    return sum
}

function multiply()
{
    var l = oldValue.length-1
    sum=1;
    sum=Number(oldValue[l-1])*Number(oldValue[l])
    oldValue.push(sum)
    return sum
}

function divide()
{
    var l = oldValue.length-1
    sum=1;
    sum=Number(oldValue[l-1])/Number(oldValue[l])
    oldValue.push(sum)
    return sum
}

$(".clear").click(function(){
    oldValue=[]
    operation=[]
    sum=0
    $(".display").text(" ")
})