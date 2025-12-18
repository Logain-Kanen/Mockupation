//Global Variables
let stylesheet = document.stylesheet;

//Textbox Functions
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
        sunText.textContent="ROBERT: It has a name... what you think i remember it?";
    }
}

