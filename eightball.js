<SCRIPT LANGUAGE="JavaScript">

var answers = new Array(
	"Yes.",
	"No.", 
	"My sources are pointing toward yes.", 
	"It's possible.",
	"Very unlikely.", 
	"Can you repeat the question?",
	"Absolutely not.", 
	"Sure.",
	"Ask again later."
	);

function fortune() {
	num = Math.round( (answers.length - 1) * Math.random());
	return answers[num];
}

</script>



