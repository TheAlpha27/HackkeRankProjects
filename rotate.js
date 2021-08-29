  let b1 = document.getElementById('btn1');
        let b2 = document.getElementById('btn2');
        let b3 = document.getElementById('btn3');
        let b4 = document.getElementById('btn4');
        let b6 = document.getElementById('btn6');
        let b7 = document.getElementById('btn7');
        let b8 = document.getElementById('btn8');
        let b9 = document.getElementById('btn9');
        let i = 0;
        let arr = [1, 4, 7, 8, 9, 6, 3, 2];
        function rota() {
            i++;
            b1.innerText = arr[i%8];
            b4.innerText = arr[(i+1)%8];
            b7.innerText = arr[(i+2)%8];
            b8.innerText = arr[(i+3)%8];
            b9.innerText = arr[(i+4)%8];
            b6.innerText = arr[(i+5)%8];
            b3.innerText = arr[(i+6)%8];
            b2.innerText = arr[(i+7)%8];
            return true;
        }
