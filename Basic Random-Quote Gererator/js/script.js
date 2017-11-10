 $(document).ready(function(){
			var randomQuote;
			var randomAuthor;
			var randomNum;
			var quotes;
			var Author;
			getQuote();
 		function getQuote(){
 			  quotes = ["I speak softly, but carry a sharp k","Here's poison in your eye.","All that is light shall be cast in darkness",
 			  	"I'll break their spirits and their backs."," So begins a new age of knowledge.","  Even in death, you'll not see beyond the Phantom Veil.","Great honors await you in the Nothl Realm."
 			  	,"Play Over the field of battle, the smell of blood rises like a promise.","There can be no battle till Axe is at hand. And Axe is.","Sometimes I think you only want me for my hazard suit!","One little spark and before you know it, the whole world is burning"];
 			  author = [" -Riki", " -Viper", " -Chaos Knight"," -Sprit Breaker"," -Invoker","  -Phantom Assissin"," -Husker", " -Bloodseeker", " -Axe", " -Tinker" ," -Lina"];
 			 

 			  randomNum = Math.floor((Math.random()*quotes.length));
 			  randomQuote = quotes[randomNum];
 			  randomAuthor = author[randomNum];

 			 $(".quote").text(randomQuote);
 			 $(".author").text(randomAuthor);
 		}

 		$("#newQuote").on("click",function(){
 			getQuote();
 		});


 		$("#Tweet").on("click", function(){
 			window.open("https://twitter.com/intent/tweet?text="+randomQuote+randomAuthor+"&hashtags=Share_quotes");
 			
 		});
 });