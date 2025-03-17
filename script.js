//this is my code

console.log("your code is linked")

let place = "london"
console.log (place)

let year = 2025
console.log (year)

let oranges = 10
let rotten = 3
let people = 5

oranges = oranges + 10
oranges = oranges - rotten
oranges = oranges * 4
oranges = oranges / people

console.log (oranges)

let apples = 4

function increaseApples(){
    apples = apples + 1
    console.log (apples)
}

increaseApples ()
increaseApples ()
increaseApples ()

function sum (num1, num2){
    let result = num1 + num2
    console.log (result)
}

sum(3, 7)
sum(10, 25)
sum(40, 10)

function sub (num1, num2){
    let result = num1 - num2
    console.log (result)
}

sub(4, 2)

function squareNumber(num) {
    let result = num * num
    console.log (result)
}

squareNumber(5)

/* $(".subtitle").css("color", "pink") */
$(".subtitle").css("font-size", "20px")
$(".header").css("color", "pink")
$(".header").css("font-size", "70px")

function lowerOpacity(){
    /* $(".subtitle").css("opacity", "0") */
    $(".subtitle").toggleClass("hide")
}

$(".subtitle").click(lowerOpacity)

function showModal(){
    $(".modal").toggleClass("show")
}

$(".button").click(showModal)
$(".modal").click(showModal)

function hideText(){
    $(this).css("opacity", "0")
}

function showText(){
    $(this).css("opacity", "1")
}

$(".subtitle").hover(hideText, showText)

function changeColor(){
    let randomR = Math.random() * 255
    let randomG = Math.random() * 255
    let randomB = Math.random() * 255
    $("header").css("color", "rgb("+randomR+", "+randomG+", "+randomB+")")
}

changeColor()


$(window).scroll(changeColor)