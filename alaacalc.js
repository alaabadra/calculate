 var queue = [];
        var input = 0;
//this meth. for operator equal =
        function calculateQueue(value){//the parameter in here that is queue arr that contain no. 1, operator , no. 2 
            if (input !==0) {
            input = parseFloat(input);//convert  that inside operator the second input because this no. was stay in this operator
            addToQueue(input);//add second no. into queue(queue[2])
            //now =>>> inside queue (queue[0]=>the first no , queue[1]=>the operator ,queue[2]=>the second no  )
            }//this next => to examine the operator because put signal equal to appear the result
            var answer = value[0];//put from queue[0](no. 1)into variable answer
            var dividedByZero = 0;//this variabe to help for operator /
            for (  var i = 2; i < value.length; i= i+2) {//this loop to queue arr
                switch (queue[i-1]) {//queue[1](operator)
                    case '+':
                        answer+= value[i];//queue[i](queue[2]=>no. 2) sum  no. 2 with the value that store in variable answer(no. 1) => (no. 1+ no. 2)then this willstore in answer that means the variable answer contain now on result value
                        break;
                    case '-':
                        answer-= value[i];//queue[i](queue[2]=>no. 2) sum  no. 2 with the value that store in variable answer(no. 1) => (no. 1- no. 2)then this willstore in answer that means the variable answer contain now on result value
                        break;
                    case '/':    if (value[i] === 0)   dividedByZero = 1;//examine queue[2]=>no. 2 if zero ==> put 1 into varaible dividedByZero because this that found error
                            else      answer = answer / value[i];//queue[i](queue[2]=>no. 2) sum  no. 2 with the value that store in variable answer(no. 1) => (no. 1/ no. 2)then this willstore in answer that means the variable answer contain now on result value

                        break;
                    case'*': answer = answer * value[i];//queue[i](queue[2]=>no. 2) sum  no. 2 with the value that store in variable answer(no. 1) => (no. 1* no. 2)then this willstore in answer that means the variable answer contain now on result value
                        break;
                }

            }

            //answer = answer.toFixed(10);
            answer = parseFloat(answer);//convert that inside this variable that means convert result value
            if ( dividedByZero === 1) { //here the next step to case three (/) 
                clearAll();//clear to text input 
                document.getElementById("answer").innerHTML =  "ERROR";//and then the word input 
            }
            else
            {document.getElementById("answer").innerHTML =  answer ;//put the result value in text input
                input = answer;
            queue = [];
             //******************************this is the end *****************************************
            }


        }
////////////////////////////////////////////////////////////
        function addToQueue(input){
            queue.push(input);//add to arr queue
        }
///////////////////////////////////////////////////////////
        function clearAll() {
            queue = [];
            input = 0;
            document.getElementById("answer").innerHTML = "0";
        }
//********************************************this is the start*****************************************
//enter number((no. 1 and after that no.2)=>1.the first no. ,,,2. the operator but this in other meth not here ,,,,3.the second no.)
        function numericButton(arg){
            //
            if ( document.getElementById("answer").innerHTML ===  "ERROR" || (document.getElementById("answer").innerHTML == "0" && arg != "."))
              { document.getElementById("answer").innerHTML = ""; }
            if (!(arg === ".") || !input.match(/[.]/)) {

            input += arg;//put no. in varaible input
            document.getElementById("answer").innerHTML += arg;//put no. in text input
                //the previous is the first no. and after enter the operator will return to this meth. to enter the second no.
            }


        }
//enter operator
        function operatorButton(arg){
            if (input !== 0 && input !== "-") {
                input = parseFloat(input);//convert first no.
                addToQueue(input);//put first no. that inside varaible input into queue(queue[0])
                addToQueue(arg);//put the operator into queue(queue[1])
                document.getElementById("answer").innerHTML +=arg;//put operator to text input
                input = 0;//become this varaible store zero because the first no. was toke to queue[0]

           }



        }
       