let perons=document.querySelectorAll(".person");
let rightPart=document.querySelector(".right-part");
let cross=document.querySelector(".cross");
let scrollTop=document.querySelector(".scroll-top");
let personeNames=["Kenneth Ahn 1","Kenneth Ahn 2","Kenneth Ahn 3","Kenneth Ahn 4",]
let personName=document.querySelector(".right-part h3");
let persondetailspara1=document.querySelector(".right-part #para1");
let persondetailspara2=document.querySelector(".right-part #para2");

let Para1=["1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt itaque odit tempore eum similique consequuntur amet autem accusamus impedit vel eaque, eveniet tenetur ullam aspernatur iusto quaerat sed architecto corrupti, facilis commodi quam adipisci non rem! Ullam aperiam neque voluptates consequuntur molestiae, earum quia tempore similique tenetur quod adipisci a.",
"2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt itaque odit tempore eum similique consequuntur amet autem accusamus impedit vel eaque, eveniet tenetur ullam aspernatur iusto quaerat sed architecto corrupti, facilis commodi quam adipisci non rem! Ullam aperiam neque voluptates consequuntur molestiae, earum quia tempore similique tenetur quod adipisci a.",
"3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt itaque odit tempore eum similique consequuntur amet autem accusamus impedit vel eaque, eveniet tenetur ullam aspernatur iusto quaerat sed architecto corrupti, facilis commodi quam adipisci non rem! Ullam aperiam neque voluptates consequuntur molestiae, earum quia tempore similique tenetur quod adipisci a.",
"4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt itaque odit tempore eum similique consequuntur amet autem accusamus impedit vel eaque, eveniet tenetur ullam aspernatur iusto quaerat sed architecto corrupti, facilis commodi quam adipisci non rem! Ullam aperiam neque voluptates consequuntur molestiae, earum quia tempore similique tenetur quod adipisci a."];


let Para2=["1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos quasi eius, voluptas sed provident beatae eveni",
"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos quasi eius, voluptas sed provident beatae eveniet qu",
"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos quasi eius, voluptas sed provident beatae eveniet q.",
"4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos quasi eius, voluptas sed provident beatae eveniet q"];


for(let i=0;i<4;i++){
    perons[i].addEventListener("click",()=>{

        personName.textContent=personeNames[i];
        persondetailspara1.textContent=Para1[i];
        persondetailspara2.textContent=Para2[i];



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






// Mobile View Team Section

let m_persons=document.querySelectorAll(".m-person-img");
let m_persons_content=document.querySelectorAll(".m-person-content");

m_persons.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        m_persons_content[index].style.display="block";
        let m_cross=document.querySelectorAll(".m-person-content .m-cross")
        m_cross[index].addEventListener("click",()=>{
            m_cross[index].parentElement.style.display="none";
        })
    })
})

