        let res = document.getElementById('res');
        function Clear() {
            res.innerText = '';
        }
        function Bin0() {
            res.innerText = res.innerText + '0';
        }
        function Bin1() {
            res.innerText = res.innerText + '1';
        }
        function add() {
            res.innerText = res.innerText + '+';
        }
        function sub() {
            res.innerText = res.innerText + '-';
        }
        function mul() {
            res.innerText = res.innerText + '*';
        }
        function div() {
            res.innerText = res.innerText + '/';
        }
        function Calc() {
            let str = res.innerText;
            let reg1 = /\d*/;
            let reg2 = /\d*$/;
            let bin1 = str.match(reg1);
            let bin2 = str.match(reg2);
            console.log("bin1 = " + bin1);
            console.log("bin2 = " + bin2);
            if (str.indexOf('+') != -1) {
                let a = parseInt(bin1, 2);
                let b = parseInt(bin2, 2);
                let sum = a+b;
                res.innerText = sum.toString(2);
            }
            else if (str.indexOf('-') != -1) {
                let a = parseInt(bin1, 2);
                let b = parseInt(bin2, 2);
                let sub = a-b;
                res.innerText = sub.toString(2);
            }
            else if (str.indexOf('*') != -1) {
                let a = parseInt(bin1, 2);
                let b = parseInt(bin2, 2);
                let mul = a*b;
                res.innerText = mul.toString(2);
            }
            else if (str.indexOf('/') != -1) {
                let a = parseInt(bin1, 2);
                let b = parseInt(bin2, 2);
                let div = a/b;
                res.innerText = div.toString(2);
            }
        }
