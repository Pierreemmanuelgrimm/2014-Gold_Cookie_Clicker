$(document).ready(function(){
for (a = 0; a < tech.length; a++){
	$('#iT').append('<td class ="Purchase" id='+a+'>('+tech[a][2]+')'+tech[a][0]+' ['+tech[a][4]+'_Gold]</td>');
	$('#Up').append('<td class ="Upgrade" id="'+(a+100)+'">(Level '+tech[a][3]+')Upgrade ['+tech[a][5]+'_Gold]</td>');
}
Init();
  $("#Clicker").click(function(){
	distance = parseFloat($("#Distance").text())+ ClickSpeed;
	Display();
  });
  $(".Purchase").click(function(event){
	Buy(event);
  }); 
  $(".Upgrade").click(function(event){
	Upgrade(event);
  });
  setInterval(function() {
	distance = parseFloat($("#Distance").text())+ ContinSpeed;
	Display();
  }, 10);

});