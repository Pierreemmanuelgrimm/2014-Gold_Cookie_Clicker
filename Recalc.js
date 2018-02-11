	function Init(){
		ContinSpeed = 0;
		for (x = 0; x < tech.length; x++){
			ContinSpeed += (Math.pow(100*tech[x][1]*tech[x][2],(tech[x][3]+1)/2)/100);
		}
		 $("#Distance").html(distance.toFixed(2));
		 AdjustSpeed = 100 * ContinSpeed;
		 $("#goldsec").html(AdjustSpeed.toFixed(0));
	 }
	 function Display(){
	 $("#Distance").html(distance.toFixed(2));
	 }