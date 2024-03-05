let img_th1=document.getElementById("one")
let img_th2=document.getElementById("two")
let img_th3=document.getElementById("three")
let img_th4=document.getElementById("four")
let main=document.getElementById("main")
img_th2.setAttribute("src","./images/image-product-2.jpg")
img_th1.setAttribute("src","./images/image-product-1.jpg")
img_th3.setAttribute("src","./images/image-product-3.jpg")
img_th4.setAttribute("src","./images/image-product-4.jpg")

img_th2.onclick=function(){
    main.src=img_th2.src
    console.log(main.src)

}
img_th1.onclick=function(){
    main.src=img_th1.src
    console.log(main.src)

}
img_th3.onclick=function(){
    main.src=img_th3.src
    console.log(main.src)

}
img_th4.onclick=function(){
    main.src=img_th4.src
    console.log(main.src)

}