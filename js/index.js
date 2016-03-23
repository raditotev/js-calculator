 $(document).ready(function(){  
  var input = "0";

  function display(value, append){
    input = typeof value !== 'undefined' ? (append ? input + value : value) : input;
    input = input === "0" ? "" : input
    $('#display').val(input);
  }

  function calc(){
    try { display(Math.round(eval(input) * 100) / 100); }
    catch(err) { display(""); }
  }
  
  $(document).keypress(function(event){
    event.preventDefault();
    var key = event.which || event.CharCode;
    
    if (key > 41 && key < 58) { display(String.fromCharCode(key), true); }
    else if (key === 13) { calc(); }
  });
  
  $('button').click(function(){ display($(this).val(), true); });
  $('#result').click(function(){ calc(); });
  $('#clear').click(function(){ display("0"); });
  $('#clearLast').click(function(){ display(input.substring(0, input.length - 1)); });  
  display();
});