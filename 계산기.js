// 계산기 버튼 클릭시 처리 함수
function 계산기버튼() {
    var buttons = document.getElementsByClassName("btn");
    var display = document.getElementById("display");  // 결과가 표시될 영역

    // 각 버튼에 클릭 이벤트 리스너 추가
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var buttonText = this.innerText;  // 클릭한 버튼의 텍스트 (예: 1, 2, + 등)

           

              // 2. '=' 버튼이면 결과 계산
            if (buttonText === "=") {
               try {
                     let expression = display.innerText
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/");

                     display.innerText = eval(expression);
               } 
               catch (e) {
                     display.innerText = "오류";
               }
              } 
               // 3. 'C' 버튼이면 초기화
                else if (buttonText === "C") {
                   display.innerText = "0";
                } 
               // 4. 나머지 숫자나 연산자
              else {
                if (buttonText==="←") {
                    let currentText = display.innerText;
                    
                    if(currentText.length===1){
                     display.innerText="0";
                    }
                    else{ 
                    display.innerText=currentText.slice(0,-1);
                    }
                               
                    }
                else{  
                if (display.innerText === "0") {
                   display.innerText = buttonText;
                 }
              else {
                    display.innerText += buttonText;
                     }
                    }
          }
});
           
            }
        }

// 함수 실행 (페이지 로드 시)
window.onload = function() {
    계산기버튼();
};

