let btn = document.getElementById('btn');
        let i = 0;
        function clickbtn(){
            i++;
            btn.innerText = i;
            return true;
        }
        function resetbtn(){
            i = 0;
            btn.innerText = i;
            return true;
        }
