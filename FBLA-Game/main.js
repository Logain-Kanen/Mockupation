//Global Variables
let stylesheet = document.stylesheet;


//Sun Textbox
function sunTextbox(){
    let sunText = document.getElementById('sun-textbox');
    sunText.style.visibility="visible"
    sunNum = Math.floor(Math.random() * 5) + 1
    if (sunNum===parseInt(1)){
        sunText.textContent="ROBERT: Yeah, that's a star alright.";
    }
    else if (sunNum===parseInt(2)){
        sunText.textContent="BOBERT: It's a white dwarf, it's small, but dense and REALLY hot.";
    }
    else if (sunNum===parseInt(3)){
        sunText.textContent="ROBERT: No, no, you can't fight a star, trust me I tried, took a while and it went nowhere.";
    }
    else if (sunNum===parseInt(4)){
        sunText.textContent="BOBERT: Your curiosity about a random star that has no actual impact on anything is fairly interesting.";
    }
    else if (sunNum===parseInt(5)){
        sunText.textContent="ROBERT: It has a name... what you think I remember it?";
    }
}
// Hephestus Minigame
onload=document.getElementById('text1').style.visibility= 'visible'
        let count1 = Math.floor(Math.random() * 10) + 1, count2 = Math.floor(Math.random() * 10) + 1, count3 = Math.floor(Math.random() * 10) + 1, count4=Math.floor(Math.random() * 10) + 1;
        
        document.getElementById("valve1").addEventListener("click", valveFunc1);
        document.getElementById("valve2").addEventListener("click", valveFunc2);
        document.getElementById("valve3").addEventListener("click", valveFunc3);
        document.getElementById("valve4").addEventListener("click", valveFunc4);

        document.getElementById("count-content1").textContent=count1;
        document.getElementById("count-content2").textContent=count2;
        document.getElementById("count-content3").textContent=count3;
        document.getElementById("count-content4").textContent=count4;
        function valveFunc1(){
            count1--
            if(count1== 0){
                document.getElementById("count-content1").textContent="DONE"
                document.getElementById("valve1").removeEventListener('click', valveFunc1)

            }
            else{
                document.getElementById("count-content1").textContent=" " +count1
            }
            if(count1==0&&count2==0&&count3==0&&count4==0){
            document.getElementById("lesson").style.visibility = "visible"
        }
        }
        function valveFunc2(){
            count2--
            if(count2== 0){
                document.getElementById("count-content2").textContent="DONE"
                document.getElementById("valve2").removeEventListener('click', valveFunc2)

            }
            else{
                document.getElementById("count-content2").textContent=count2
            }
            if(count1==0&&count2==0&&count3==0&&count4==0){
            document.getElementById("lesson").style.visibility = "visible"
        }
        }
        function valveFunc3(){
            count3--
            if(count3== 0){
                document.getElementById("count-content3").textContent="DONE"
                document.getElementById("valve3").removeEventListener('click', valveFunc3)

            }
            else{
                document.getElementById("count-content3").textContent=count3
            }
            if(count1==0&&count2==0&&count3==0&&count4==0){
            document.getElementById("lesson").style.visibility = "visible"
        }
        }
        function valveFunc4(){
            count4--
            if(count4== 0){
                document.getElementById("count-content4").textContent="DONE"
                document.getElementById("valve4").removeEventListener('click', valveFunc4)

            }
            else{
                document.getElementById("count-content4").textContent=count4
            }
            if(count1==0&&count2==0&&count3==0&&count4==0){
            document.getElementById("lesson").style.visibility = "visible"

        }
        }

function openMenu(){

    document.getElementById('menu').style.visibility = 'visible';
    document.getElementById('open').style.visibility = 'hidden';

    if(localStorage.getItem("hephestus-completion")){
        document.getElementById('hephestus-completion').textContent = "Hephestus: COMPLETED"
    }
    
}


// Completion Tracker
function hephTracker(){
    localStorage.setItem("hephestus-completion", "Hephestus: COMPLETED")
    window.location.href = "/index.html"
}
