let insert=document.querySelector(".hide-show");
window.addEventListener("keydown",function(dets){
    console.log(dets);
    let change=document.querySelector("#change-key");
    let mainBox=document.querySelector(".main-box");
    mainBox.style.display="none";

    change.innerHTML=`${dets.which}`;


    insert.innerHTML=`
                <div class="uper-main">
                    <h1>${dets.which}</h1>
                    <p>Key Code information</p>
                </div>


                <div class="all-div">
                            <div class="box">
                                <p>event.key</p>
                                <h2>${dets.key}</h2>
                            </div>
                            <div class="box">
                                <p>event.location</p>
                                <h2>${dets.location}</h2>
                            </div>
                            <div class="box">
                                <p>event.code</p>
                                <h2>${dets.code}</h2>
                            </div>
                            <div class="box">
                                <p>event.which</p>
                                <h2>${dets.keyCode}</h2>
                            </div>
                            <div class="box">
                                <p>Descreption</p>
                                <h2>${dets.key} /Option</h2>
                            </div>
                            <div class="box">
                                <p>Meta Keys</p>
                                <h2>${dets.metaKey}</h2>
                            </div>
                            <div class="box">
                                <p>event Dump</p>
                                <h2>KeyExist ${dets.key}</h2>
                            </div>
                            <div class="box">
                                <p>Similar Values</p>
                                <h2>Similar</h2>
                            </div>
                            <div class="box">
                                <p>Unicode</p>
                                <h2>${dets.which}</h2>
                            </div>
                            <div class="box">
                                <p>History</p>
                                <h2>${dets.key}</h2>
                            </div>
                </div>
    `;

})


let Table=document.querySelector(".table");
let c1=document.querySelector(".container1");
let c2=document.querySelector(".container2");
let c3=document.querySelector(".container3");
Table.addEventListener("click",function(){
    c1.style.display="none";
    c2.style.display="none";
    c3.style.display="block";
   
})


let Logo=document.getElementById("logo");
Logo.addEventListener("click",function(){
    c1.style.display="block";
    c2.style.display="none";
    c3.style.display="none";
})