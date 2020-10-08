const scrollContainer = document.getElementById('scrollContainer');
const scrollMaxY = scrollContainer.scrollHeight;
//divide total scrolling into 6 section
const navProgress = () => {
	console.log('top: '  + (scrollContainer.pageYOffset || scrollContainer.scrollTop));
	console.log(scrollContainer.scrollHeight);
}