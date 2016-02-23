    (function datePrint() {
        
        var date = new Date(),
            demo = document.getElementById( 'demo' ),
            dateString = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds().toString();
        
        
        demo.innerHTML = dateString;

        setTimeout(datePrint, 1000);
	
        
    })();