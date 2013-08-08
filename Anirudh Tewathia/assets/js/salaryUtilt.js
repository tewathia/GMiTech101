var salaryCalcApp = salaryCalcApp || {};
(function() {
	var salaryUtils={
	initializeFn: function ()
	{
		var taxSlider=document.getElementById('taxSlider');
		var workingDays=document.getElementById('workingDaysText');
		var formSection=document.getElementById('salaryBox');
		taxSlider.addEventListener("mouseup", showTaxValue);
		workingDays.addEventListener("focus", checkWorkingDays);
		workingDays.addEventListener("blur", checkWorkingDays);
		formSection.addEventListener("click", checkEmpty)

	}
	// this shows the tax percentage value as chosen by user on the slider
	showTaxValue: function ()
	{
		var taxSlider=document.getElementById('taxSlider');
		var taxValueSpan=document.getElementById('taxValueSpan');
		var taxSliderValue=taxSlider.value;
		taxValueSpan.innerText=taxSliderValue+"%";
	}
	// this function checks if the number of working days entered by the user fall within the acceptable of range of <Total Days
	checkWorkingDays: function ()
	{
		var workingDays=document.getElementById('workingDaysText');
		var totalDays=document.getElementById('totalDaysText');	
		if (parseInt(workingDays.value)>parseInt(totalDays.value)) {
			workingDays.classList.add('failValidateDays');}
		else
			{workingDays.classList.remove('failValidateDays');}
			
	}
	// this function checks if individual text fields are empty
	checkEmpty: function ()
	{
		console.log(arguments);
		var textBoxes=document.getElementsByClassName('textBox');
		for(var i in textBoxes)
		{	textBox=textBoxes[i];
			var errorSpanId=textBox.getAttribute('errorspan');
			error=document.getElementById(errorSpanId);
			if(textBox.value=="")
				{textBox.classList.add('failValidate');
				error.innerText="Please Fill This Field!";}
			else
				{textBox.classList.remove('failValidate');
				error.innerText="";}

		}
	}
}
	salaryCalcApp.salaryUtils=salaryUtils;
})();