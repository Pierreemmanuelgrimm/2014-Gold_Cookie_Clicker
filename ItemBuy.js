	function Buy(){
		Item = (event.target.id);
		if (distance >= tech[Item][4]){
		  distance -= tech[Item][4];
		  tech[Item][4] *= 1.2;
		  tech[Item][4] = Math.round(tech[Item][4]).toFixed(0);
		  tech[Item][2] += 1;
		  $("#"+Item+"").html('('+tech[Item][2]+')'+tech[Item][0]+' ['+tech[Item][4]+'_Gold]');
		Init();
		}
	}
	function Upgrade(){
		Item = (event.target.id)-100;
		if (distance >= tech[Item][5]){
		  distance -= tech[Item][5];
		  tech[Item][5] *= tech[Item][3]*Math.pow(5,tech[Item][3]);
		  tech[Item][5] = Math.round(tech[Item][5]).toFixed(0);
		  tech[Item][3] += 1;
		  $("#"+(Item+100)+"").html('(Level '+tech[Item][3]+')Upgrade ['+tech[Item][5]+'_Gold]');
		Init();
		}
	}