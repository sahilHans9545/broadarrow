let perons=document.querySelectorAll(".person");
let rightPart=document.querySelector(".right-part");
let cross=document.querySelector(".cross");
let scrollTop=document.querySelector(".scroll-top");
let personeNames=["Kenneth Ahn 1","Kenneth Ahn 2","Kenneth Ahn 3","Kenneth Ahn 4",]
let personName=document.querySelector(".right-part h1");
personName.textContent="SahilHAns"

for(let i=0;i<4;i++){
    perons[i].addEventListener("click",()=>{

        personName.textContent=personeNames[i];
        rightPart.style.display="block";
        for(let j=0;j<4;j++){
            perons[j].style.display="none";
        }
        cross.style.display="block";
        perons[i].classList.add("change");
        perons[i].style.display="flex"
        perons[i].lastElementChild.style.display="block";

        cross.addEventListener("click",()=>{
            perons[i].classList.remove("change");
            perons[i].style.display="flex"
            for(let j=0;j<4;j++){
            perons[j].style.display="block";
            cross.style.display="none";
            rightPart.style.display="none";
        }
        })


    })
}

scrollTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0
    })
})