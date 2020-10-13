const scrollContainer = document.getElementById('scrollContainer');
const sections = document.querySelectorAll('div.section');
const descriptions = document.querySelectorAll('div.project_description');
const captions = document.querySelectorAll('p.caption');
const numberOfSections = sections.length;
let prevSectionIndex = 0;
let currSectionIndex = 0;
let prevImageIndex = 0, currImageIndex=0;

// add section on top of each other
// project description goes invisible

const navSections = () => {
	let mappedScroll = mapRange(scrollContainer.scrollTop,0, scrollContainer.scrollHeight, 0, numberOfSections);
	currSectionIndex = Math.trunc(mappedScroll);
	if(currSectionIndex != prevSectionIndex) {

		dispCurrDescription(sections[currSectionIndex]);
	}
	navImagesWithinSection(sections[currSectionIndex], mappedScroll);
	prevSectionIndex = currSectionIndex;

}

const navImagesWithinSection = (section, scroll) => {
	let images = section.querySelectorAll('img');
	let captionsWithinSection = section.querySelectorAll('p.caption');

	currImageIndex = Math.trunc(mapRange(scroll, currSectionIndex,  currSectionIndex+1, 0, images.length));

	if(currImageIndex >= prevImageIndex) {
		addElement(images[currImageIndex]);
	}  else if (currImageIndex < prevImageIndex && prevSectionIndex >= currSectionIndex) {
		removeElement(images[prevImageIndex]);
	}

	dispImgCaptions(captionsWithinSection, currImageIndex);
	prevImageIndex = currImageIndex;
} 


const dispCurrDescription = (section) => {
	let description = section.querySelector('div.project_description');
	descriptions.forEach(section => section.classList.add('invisible')); //exclude current section and add 'invisible'
	description.classList.remove('invisible');
}

const dispImgCaptions = (captionsWithinSection, index) => {
	if(captionsWithinSection[index]) {
		captions.forEach(caption => caption.classList.add('notDisplayed'));
		captionsWithinSection[currImageIndex].classList.remove('notDisplayed');
	}
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