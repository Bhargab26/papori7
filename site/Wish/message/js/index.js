this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "অৱশেষত এই দিনটো আহিয়েই গ’ল,যিটো দিনৰ অপেক্ষা মই বহু দিনৰ পৰা কৰি আছিলোঁ। জানা? তুমি মোৰ জীৱনত সুখৰ বৰষুণ লৈ আহিছা। শূন্যতা ভৰা মোৰ জীৱনটো হাঁহিৰে উপচাই পেলাইছা। মই কেতিয়াও ভবা নাছিলো যে মোৰ জীৱন টো ইমান সুন্দৰ হ’ব। এইটো অকল তোমাৰ প্ৰচেষ্টাত। সদায় মোৰ ইমান চিন্তা কৰি,মোক মৰম কৰাৰে পৰা আদি কৰি,সকলো ক্ষেত্ৰতে মোক সহায় কৰিবলৈ আগবাঢ়ি আশা মোৰ জান জনীৰ আজি ১৯টা বছৰ সম্পূৰ্ণ হ’ল। জন্মদিনৰ অশেষ শুভেচ্ছা জ্ঞাপন কৰিলোঁ তোমাক। তুমিয়ে মোৰ ধুনু,তুমিয়ে মোৰ জান,তুমিয়ে মোৰ দেহা আৰু তুমিয়ে মোৰ প্ৰাণ। এনেকৈয়ে হাহি থাকিবা সদায়,যেনেকৈ এই কথা খিনি পঢ়ি হাঁহি আছা। যিকোনো সময়তে কিবা সহায় লাগিলে মোক কবা,মই সদায় তোমাৰ কাষতেই আছোঁ। I LOVE YOU জান। ৰ’বা ৰ’বা,শেষ হোৱা নাই,next টো টিপি দিয়া আৰু চোৱা.....";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 1
	},0.15);
}