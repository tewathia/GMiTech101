function initialize()
{
	document.getElementById('applyButton').onclick=applyPress;
}
function applyPress()
{
	var a = parseInt(document.getElementById('valueA').value);
	var b = parseInt(document.getElementById('valueB').value);
	var op=document.getElementById('operatorDrop');
	var newDiv=document.createElement('div');
	var result=calcResult(a,b);
	newDiv.innerHTML=a+" "+op.value+" "+b+" results in "+result;
	document.getElementById('outputWindow').appendChild(newDiv);
}
function calcResult(a,b)
{
	var op=document.getElementById('operatorDrop');
	if (op.value=="Add")
		output=a+b;
	else if (op.value=="Subtract")
		output=a-b;
	else if (op.value=="Multiply")
		output=a*b;
	else if (op.value=="Divide")
		output=a/b;

	return output;
}
