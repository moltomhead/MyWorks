
var str = "名前は？";
var i = 0;
var answer = prompt(str, "noname");
console.log(answer);
show();




function show(){
	console.log(i++)
	var tid = setTimeout(function(){
		show();
	}, 1000);

	if(i > 5)
		clearTimeout(tid);
}

var usr = {
	email: "mail",
	tel: 00011112222,
	greet: function(name){
		alert("Hello!, "+name + " from " + this.email);
	}
};

console.log(usr.email);
usr.greet("Tom");

/*
(function(name){
	console.log(name);
})("tom");
*/