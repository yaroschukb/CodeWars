

	/*The marketing team is spending way too much time typing in hashtags.
	Let's help them with our own Hashtag Generator!

	Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples:

	"Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
	"Hello     World   "                     =>  "#HelloWorld"
	""                                       =>  false*/




function hashTag(str){
	if(!str || str.length < 1) return false;

	const arr='#'+str.split(' ')
                .map(el=>el.charAt(0).toUpperCase()+el.substr(1))
                .join('');

	const stringWithTag=`${arr.trim()}`;
	if(str.length===''||stringWithTag==="#"){return false}
	return stringWithTag.length>140?false:arr
	
} 
