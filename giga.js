 'use strict';
			$('#petgif').hide();
			$('#petimg').hide();
            var pet= {
            fullness: 700, 
            happiness: 700,
            energy: 2000,
            feed: function () { this.fullness += 3; this.energy +=1; console.log(pet); },
            sleep: function () { this.energy += 3; this.hunger +=1; console.log(pet); },
            play: function () { this.happiness += 3; this.energy +=2; console.log(pet); },
            };
			$(document).ready(function(){
			$("#petgif").click(function(){
            $("#petgif").slideUp(2000).slideDown(2000);
    });
});
			
					
			var counter = setInterval(function() {
				
				pet.fullness -= 5;
                pet.happiness -= 5;
				pet.energy -= 5;
                                
                $('#feedbtn').text("Fullness " + pet.fullness);
                $('#smileybtn').text('Happiness ' + pet.happiness);
				$('#ZZZZZbtn').text('Energy ' + pet.energy);
			
				
				
				
				if(pet.fullness <= 0 || pet.happiness <= 0)
					{
						this.clearInterval(counter);
						$('#petimg').hide();
						$('#petgif').show();
						$('#petgif2').hide();
						$('#bomb');
						
				
						console.log("FATALITY");
					}
				
				else if(pet.fullness >=500 && pet.happiness >= 500)
					{
						$('#petimg').hide();
						
						$('#petgif2').show();

					}
				else { $('#petimg').show();
					   $('#petgif2').hide(); 
					 }
			},	60)
			
			 $('#petimg').click(function() 
			 {
                var random = Math.floor(Math.random()*5);
				
			if(random == 2 || random == 4)
				{ 
				pet.fullness += 100; 
				pet.happiness += 100; 
				pet.energy+=100;
				alert('lucky bonus'); 
				}
			 });
			    
				
				$('#API').click(function()
				{
					$.get('http://clevelandcodes-sample-api.herokuapp.com/tamagotchi',function(response)
					{
						pet.fullness += response.feed; /*increasing fullness by adding the feed value from the api response*/
						pet.happiness += response.pet;
						pet.energy + 100;
						 $('#feedbtn').text("Fullness: " + pet.fullness);
						 $('#smileybtn').text('Happiness: ' + pet.happiness);
						 $('#ZZZZZbtn').text("Energy: " + pet.energy);
											
					});
				});