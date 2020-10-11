const scrollContainer = document.getElementById('scrollContainer');
const sections = document.querySelectorAll('div.section');
let prevIndex, currSectionIndex;

const navSections = () => {

	currSectionIndex = Math.trunc(mapRange(scrollContainer.scrollTop,0, scrollContainer.scrollHeight, 0, 7));
	if(currSectionIndex != prevIndex) {
		dispCurrSection(sections[currSectionIndex]);
		navImagesWithinSection(sections[currSectionIndex]);
	}
	prevIndex = currSectionIndex;

}

const navImagesWithinSection = (section) => {
	let images = section.querySelectorAll('img');
	console.log(images);
} 

const dispCurrSection = (section) => {
	sections.forEach(section => section.classList.add('invisible')); //exclude current section and add 'invisible'
	section.classList.remove('invisible');
}

const mapRange = (value, a, b, c, d) => {
  value = (value - a) / (b - a);
  return c + value*(d-c);
}

//within section scroll through images and display current legends