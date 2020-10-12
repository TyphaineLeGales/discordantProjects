const scrollContainer = document.getElementById('scrollContainer');
const sections = document.querySelectorAll('div.section');
const numberOfSections = sections.length;
let prevSectionIndex, currSectionIndex;
let prevImageIndex = 0, currImageIndex=0;


// corresponding legends for images 
//class system for images detect if its horizontal or vertical ?

const navSections = () => {
	let mappedScroll = mapRange(scrollContainer.scrollTop,0, scrollContainer.scrollHeight, 0, numberOfSections);
	currSectionIndex = Math.trunc(mappedScroll);
	if(currSectionIndex != prevSectionIndex) {
		dispCurrSection(sections[currSectionIndex]);
	}
	navImagesWithinSection(sections[currSectionIndex], mappedScroll);
	prevSectionIndex = currSectionIndex;

}

const navImagesWithinSection = (section, scroll) => {
	let images = section.querySelectorAll('img');
	let captions = section.querySelectorAll('p.caption');

	currImageIndex = Math.trunc(mapRange(scroll, currSectionIndex,  currSectionIndex+1, 0, images.length));
	console.log(mapRange(scroll, currSectionIndex,  currSectionIndex+1, 0, images.length));
	if(currImageIndex > prevImageIndex) {
		addElement(images[currImageIndex]);
		// console.log(captions[currImageIndex].innerHTML);
		// addElement(captions[currImageIndex]);
	}  else if (currImageIndex < prevImageIndex && prevSectionIndex >= currSectionIndex) {
		removeElement(images[prevImageIndex]);
		// removeElement(captions[prevImageIndex]);
	}


	prevImageIndex = currImageIndex;
} 

const dispCurrSection = (section) => {
	sections.forEach(section => section.classList.add('invisible')); //exclude current section and add 'invisible'
	section.classList.remove('invisible');
}

const addElement = (element) => {
	element.classList.remove('invisible');
}

const removeElement = (element) => {
	element.classList.add('invisible');
}

const detectScrollDirection = (prev, curr) => {
	return userIsScrollingDown = curr > prev ? true : false
}

const mapRange = (value, a, b, c, d) => {
  value = (value - a) / (b - a);
  return c + value*(d-c);
}