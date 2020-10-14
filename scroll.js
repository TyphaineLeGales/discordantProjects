const scrollContainer = document.getElementById('scrollContainer');
const sections = document.querySelectorAll('div.section');
const descriptions = document.querySelectorAll('div.project_description');
const captions = document.querySelectorAll('p.caption');
const numberOfSections = sections.length;
let prevSectionIndex = 0, currSectionIndex = 0;
let prevImageIndex = 0, currImageIndex=0;
let prevScroll=0, currScroll = 0;

// window.addEventListener( 'resize', onWindowResize, false );


function navSections ()  {
	currScroll = mapRange(scrollContainer.scrollTop,0, scrollContainer.scrollHeight, 0, numberOfSections);
	let direction;
	currSectionIndex = Math.trunc(currScroll);

	if(currSectionIndex != prevSectionIndex) {
		dispCurrDescription(sections[currSectionIndex]);
	}
	navImagesWithinSection(sections[currSectionIndex], currScroll, direction);
	prevSectionIndex = currSectionIndex;
	prevScroll = currScroll

}

function navImagesWithinSection(section, scroll, dir) {
	let images = section.querySelectorAll('img');
	let captionsWithinSection = section.querySelectorAll('p.caption');
	let prevSectionImages = sections[prevSectionIndex].querySelectorAll('img');

	currImageIndex = Math.trunc(mapRange(scroll, currSectionIndex,  currSectionIndex+1, 0, images.length));

	if(currImageIndex >=prevImageIndex && currScroll > prevScroll) {
		if(images[currImageIndex]) {
			addElement(images[currImageIndex]);
		}
	} else if (currImageIndex != prevImageIndex && currScroll < prevScroll ) {
		if(images[currImageIndex]) {
			removeElement(prevSectionImages[prevImageIndex]);
		
		}
	}


	dispImgCaptions(captionsWithinSection, currImageIndex);
	prevImageIndex = currImageIndex;
} 


function dispCurrDescription (section) {
	let description = section.querySelector('div.project_description');
	descriptions.forEach(section => section.classList.add('invisible')); //exclude current section and add 'invisible'
	description.classList.remove('invisible');
}

function dispImgCaptions (captionsWithinSection, index) {
	if(captionsWithinSection[index]) {
		captions.forEach(caption => caption.classList.add('notDisplayed'));
		captionsWithinSection[currImageIndex].classList.remove('notDisplayed');
	}
}

function addElement (element){
	element.classList.remove('invisible');
}

function removeElement (element){
	element.classList.add('invisible');
}

function detectScrollDirection (prev, curr){
	return curr > prev ? true : false;
}

function mapRange (value, a, b, c, d){
  value = (value - a) / (b - a);
  return c + value*(d-c);
}