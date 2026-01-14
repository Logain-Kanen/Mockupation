//Global Variables
let stylesheet = document.stylesheet;
let samplesCollected = 0;
let userHAnswers = {}, userLAnswers = {}, userFAnswers = {};
let hQuestionsAnswered = 0;
let lQuestionsAnswered = 0;
let fQuestionsAnswered = 0;
const correctAnswers = {
            1: 'b',
            2: 'b',
            3: 'b',
            4: 'c',
            5: 'a'
        };

//Completion Tracker
function openMenu(){
    document.getElementById('menu').style.visibility = 'visible';
    document.getElementById('open').style.visibility = 'hidden';

    if(localStorage.getItem("hephestus-completion")){
        document.getElementById('hephestus-completion').textContent = "Hephestus: COMPLETED"
    }
    if(localStorage.getItem("legoshia-completion")){
        document.getElementById('legoshia-completion').textContent = "Legoshia: COMPLETED"
    }
    if(localStorage.getItem("frostbite-completion")){
        document.getElementById('frostbite-completion').textContent = "Frostbite: COMPLETED"
    }
}

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
//Frostbite Minigame
onload=document.getElementById('text1').style.visibility= 'visible'
        
        document.getElementById("house-body").addEventListener("click", houseFunc1);
        
        
        

        function houseFunc1(){
            document.getElementById('house-body').style.opacity = '1'
            document.getElementById('house-body').removeEventListener("click", houseFunc1)
            document.getElementById('house-door').style.visibility= 'visible'
            document.getElementById("house-door").addEventListener("click", houseFunc2);
        }
        function houseFunc2(){
            document.getElementById('house-door').style.opacity = '1'
            document.getElementById('house-door').removeEventListener("click", houseFunc1)
            document.getElementById('house-roof').style.visibility= 'visible'
            document.getElementById("house-roof").addEventListener("click", houseFunc3);
        }
        function houseFunc3(){
            document.getElementById('house-roof').style.opacity = '1'
            document.getElementById('house-roof').removeEventListener("click", houseFunc1)
            console.log(document.querySelectorAll('.house-windows'))

            document.querySelectorAll('.house-windows').forEach(window => {
                window.style.visibility= 'visible';
                window.addEventListener("click", houseFunc4);
            })
            
        }
        function houseFunc4(){
            document.querySelectorAll('.house-windows').forEach(window => {
                window.style.opacity= '1';
                window.removeEventListener("click", houseFunc4)
            })
            document.getElementById('flesson').style.visibility='visible'
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
            document.getElementById("hlesson").style.visibility = "visible"
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
            document.getElementById("hlesson").style.visibility = "visible"
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
            document.getElementById("hlesson").style.visibility = "visible"
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
            document.getElementById("hlesson").style.visibility = "visible"

        }
        }


// Legoshia Minigame
onload=document.getElementById('text1').style.visibility= 'visible';
      
        
        function collectSample(element) {
            element.style.backgroundColor = 'rgba(0, 168, 3, 0.4)';
            element.style.cursor = 'default';
            element.onclick = null;
            samplesCollected++;
            document.getElementById('sample-count').textContent = `Samples Collected: ${samplesCollected}/6`;
            if(samplesCollected === 6) {
                document.getElementById('llesson').style.visibility= "visible"
            }
            
        }

//Legoshia Quiz
    function checkLAnswer(questionLNum, answerL) {
        // Record the answer
        if (!userLAnswers[questionLNum]) {
            lQuestionsAnswered++;
        }
        userLAnswers[questionLNum] = answerL;
            
        // Get all options for this question
        const options = document.querySelectorAll(`input[name="q${questionLNum}"]`);
            
        // Disable all options for this question
        options.forEach(option => {
            option.parentElement.classList.add('disabled');
            option.disabled = true;
        });
            
        // Mark correct/incorrect
        const selectedOption = document.querySelector(`input[name="q${questionLNum}"][value="${answerL}"]`);
        if (answerL === correctAnswers[questionLNum]) {
            selectedOption.parentElement.classList.add('correct');
        } else {
            selectedOption.parentElement.classList.add('incorrect');
            // Also highlight the correct answer
            const correctOption = document.querySelector(`input[name="q${questionLNum}"][value="${correctAnswers[questionLNum]}"]`);
            correctOption.parentElement.classList.add('correct');
        }
        console.log(lQuestionsAnswered + " " + userLAnswers + " " + questionLNum + " " +answerL)
        // Check if all questions are answered
        if (lQuestionsAnswered === 5) {
                showLResults();
        }
    }
        
        function showLResults() {
            let correctCount = 0;
            for (let q = 1; q <= 5; q++) {
                if (userLAnswers[q] === correctAnswers[q]) {
                    correctCount++;
                }
            }
            
            const resultDiv = document.getElementById('lquiz-result');
            const percentage = (correctCount / 5) * 100;
            
            resultDiv.classList.add('show');
            
            if (percentage >= 80) {
                resultDiv.classList.add('pass');
                resultDiv.innerHTML = `
                    <div style="margin-top: 10px">Great Job!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        You have a strong understanding of agricultural science careers!
                    </div>
                `;
            } else if (percentage >= 60) {
                resultDiv.classList.add('pass');
                resultDiv.innerHTML = `
                    <div>Good Work!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        You're on the right track! Review the material above to strengthen your knowledge.
                    </div>
                `;
            } else {
                resultDiv.classList.add('fail');
                resultDiv.innerHTML = `
                    <div>Keep Learning!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        Review the career information above and try to understand the key concepts better.
                    </div>
                `;
            }
            
            // Show the return button
            document.getElementById('return-button').style.display = 'block';
        } 
    //Hephestus Quiz
    function checkHAnswer(questionHNum, hAnswer) {
            // Record the answer
            if (!userHAnswers[questionHNum]) {
                hQuestionsAnswered++;
            }
            userHAnswers[questionHNum] = hAnswer;
            
            // Get all options for this question
            const options = document.querySelectorAll(`input[name="q${questionHNum}"]`);
            
            // Disable all options for this question
            options.forEach(option => {
                option.parentElement.classList.add('disabled');
                option.disabled = true;
            });
            
            // Mark correct/incorrect
            const selectedOption = document.querySelector(`input[name="q${questionHNum}"][value="${hAnswer}"]`);
            if (hAnswer === correctAnswers[questionHNum]) {
                selectedOption.parentElement.classList.add('correct');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                // Also highlight the correct answer
                const correctOption = document.querySelector(`input[name="q${questionHNum}"][value="${correctAnswers[questionHNum]}"]`);
                correctOption.parentElement.classList.add('correct');
            }
            
            // Check if all questions are answered
            if (hQuestionsAnswered === 5) {
                showHResults();
            }
        }

    function showHResults() {
            let correctCount = 0;
            for (let q = 1; q <= 5; q++) {
                if (userHAnswers[q] === correctAnswers[q]) {
                    correctCount++;
                }
            }
            
            const hresultDiv = document.getElementById('hquiz-result');
            const percentage = (correctCount / 5) * 100;
            
            hresultDiv.classList.add('show');
            
            if (percentage >= 80) {
                hresultDiv.classList.add('pass');
                hresultDiv.innerHTML = `
                    <div>Great Job!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        You have a strong understanding of plumber careers!
                    </div>
                `;
            } else if (percentage >= 60) {
                hresultDiv.classList.add('pass');
                hresultDiv.innerHTML = `
                    <div>Good Work!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        You're on the right track! Review the material above to strengthen your knowledge.
                    </div>
                `;
            } else {
                hresultDiv.classList.add('fail');
                hresultDiv.innerHTML = `
                    <div>Keep Learning!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        Review the career information above and try to understand the key concepts better.
                    </div>
                `;
            }
        }

        //Frostbite Quiz 
        function checkFAnswer(questionFNum, fAnswer) {
            // Record the answer
            if (!userFAnswers[questionFNum]) {
                fQuestionsAnswered++;
            }
            userFAnswers[questionFNum] = fAnswer;
            
            // Get all options for this question
            const options = document.querySelectorAll(`input[name="q${questionFNum}"]`);
            
            // Disable all options for this question
            options.forEach(option => {
                option.parentElement.classList.add('disabled');
                option.disabled = true;
            });
            
            // Mark correct/incorrect
            const selectedOption = document.querySelector(`input[name="q${questionFNum}"][value="${fAnswer}"]`);
            if (fAnswer === correctAnswers[questionFNum]) {
                selectedOption.parentElement.classList.add('correct');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                // Also highlight the correct answer
                const correctOption = document.querySelector(`input[name="q${questionFNum}"][value="${correctAnswers[questionFNum]}"]`);
                correctOption.parentElement.classList.add('correct');
            }
            
            // Check if all questions are answered
            if (fQuestionsAnswered === 5) {
                showFResults();
            }
        }

    function showFResults() {
            let correctCount = 0;
            for (let q = 1; q <= 5; q++) {
                if (userFAnswers[q] === correctAnswers[q]) {
                    correctCount++;
                }
            }
            
            const fResultDiv = document.getElementById('fquiz-result');
            const percentage = (correctCount / 5) * 100;
            
            fResultDiv.classList.add('show');
            
            if (percentage >= 80) {
                fResultDiv.classList.add('pass');
                fResultDiv.innerHTML = `
                    <div>Great Job!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        You have a strong understanding of construction careers!
                    </div>
                `;
            } else if (percentage >= 60) {
                fResultDiv.classList.add('pass');
                fResultDiv.innerHTML = `
                    <div>Good Work!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        You're on the right track! Review the material above to strengthen your knowledge.
                    </div>
                `;
            } else {
                fResultDiv.classList.add('fail');
                fResultDiv.innerHTML = `
                    <div>Keep Learning!</div>
                    <div>You scored ${correctCount}/5 (${percentage}%)</div>
                    <div style="font-size: 16px; margin-top: 10px; font-weight: normal;">
                        Review the career information above and try to understand the key concepts better.
                    </div>
                `;
            }
        }

// Completion Trackers
function hephTracker(){
    localStorage.setItem("hephestus-completion", "Hephestus: COMPLETED")
    window.location.href = "/index.html"
}
function legoshTracker(){
    localStorage.setItem("legoshia-completion", "Legoshia: COMPLETED")
    window.location.href = "/index.html"
}
function frostTracker(){
    localStorage.setItem("frostbite-completion", "Frostbite: COMPLETED")
    window.location.href = "/index.html"
}
