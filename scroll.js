const scrollContainer = document.getElementById('scrollContainer');
const sections = document.querySelectorAll('div.section');
const descriptions = document.querySelectorAll('div.project_description');
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
		dispCurrDescription();
		// dispCurrBottomItem();
		dispCurrSection(sections[currSectionIndex]);
	}
	navImagesWithinSection(sections[currSectionIndex], mappedScroll);
	prevSectionIndex = currSectionIndex;

}

const navImagesWithinSection = (section, scroll) => {
	let images = section.querySelectorAll('img');
	let captions = section.querySelectorAll('p.caption');

	currImageIndex = Math.trunc(mapRange(scroll, currSectionIndex,  currSectionIndex+1, 0, images.length));

	if(currImageIndex > prevImageIndex) {
		addElement(images[currImageIndex]);
	}  else if (currImageIndex < prevImageIndex && prevSectionIndex >= currSectionIndex) {
		removeElement(images[prevImageIndex]);
	}

	dispImgCaptions(captions, currImageIndex);
	prevImageIndex = currImageIndex;
} 

const dispCurrDescription = () => {
	descriptions[prevSectionIndex].classList.add('invisible');
	descriptions[currSectionIndex].classList.remove('invisible');
	console.log(descriptions[currSectionIndex]);
}

// const dispCurrBottomItem = () => {
// 	bottomItems[prevSectionIndex].classList.add('invisible');
// 	bottomItems[currSectionIndex].classList.add('invisible');
// }

const removePrevBottomItem = (section) => {
	let bottomItem = document.querySelector('div.bottomItem');
	bottomItem.classList.add('invisible');
}

const dispCurrSection = (section) => {
	let description = section.querySelector('div.project_description');
	descriptions.forEach(section => section.classList.add('invisible')); //exclude current section and add 'invisible'
	description.classList.remove('invisible');
	section.classList.remove('invisible');
}

const dispImgCaptions = (captions, index) => {
	if(captions[index]) {
		captions.forEach(caption => caption.classList.add('invisible'));
		captions[currImageIndex].classList.remove('invisible');
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