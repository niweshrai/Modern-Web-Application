const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
};

const find = data => tree => {
	//console.log("tree -->> " , tree);
	let res = false;
	for(let i in tree.files) {
		if(tree.files[i] == data) {
			res = true;
		}
	}

	if(res == false) {
		for(let j in tree.subFolders) {
			let response=find(data)(tree.subFolders[j]);
			if(response){
				res=true;
				break;
			}
		}
	}

	return res;	
}

//find("paper.pdf")(tree); // true 
//find("randomfile")(tree); // false

console.log(find("paper.pdf")(tree));
console.log(find("randomfile")(tree));