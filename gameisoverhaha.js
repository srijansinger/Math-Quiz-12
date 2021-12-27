p1name = localStorage.getItem("player1_name");
p2name = localStorage.getItem("player2_name");
p1score = 0;
p2score = 0;
document.getElementById("player1_name").innerHTML = p1name + "-";
document.getElementById("player2_name").innerHTML = p2name + "-";
document.getElementById("14").innerHTML = p1score;
document.getElementById("15").innerHTML = p2score;
document.getElementById("Questions").innerHTML = "Question turn - "+ p1name;
document.getElementById("Answers").innerHTML = "Answer turn - "+ p2name;

function addwordsend(){
    get_word = document.getElementById("word").value;
     word = get_word.toLowerCase();
      console.log("word in lowerCase = " + word);

      charAt1 = word.charAt(1); console.log(charAt1);

      lenght_divide_2 = Math.floor(word.length/2); charAt2 = word.charAt(lenght_divide_2); 
      console.log(charAt2);

      lenght_minus_1 = word.length - 1; charAt3 = word.charAt(lenght_minus_1); 
      console.log(charAt3);

      remove_charAt1 = word.replace(charAt1, "_");


       remove_charAt2 = remove_charAt1.replace(charAt2, "_");


        remove_charAt3 = remove_charAt2.replace(charAt3, "_");
         console.log(remove_charAt3);

         question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";


          input_box = "<br>Answer : <input type='text' id='input_check_box'>";
          
          check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
          
          row = question_word + input_box + check_button ;
          
          document.getElementById("output").innerHTML = row;
          
          document.getElementById("word").value = "";
}











































