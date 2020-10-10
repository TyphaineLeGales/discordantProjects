const scrollContainer = document.getElementById('scrollContainer');
// const scrollMaxY = scrollContainer.scrollHeight;
// const numberOfSections = 6;
const sections = document.querySelectorAll('div.section');
const scrollThreshold = 200;
let currSectionIndex = 0 ;
let prevScrollTop, curScrollTop;


const navProgress = () => {
	currScrollTop = scrollContainer.scrollTop;

	// console.log('top: '  + (scrollContainer.pageYOffset || scrollContainer.scrollTop));

	if(currScrollTop % scrollThreshold < 10) {
		if(detectScrollDirection(prevScrollTop, currScrollTop)) {
			currSectionIndex += 1;
		} else {
			currSectionIndex -= 1;
		}
		dispCurrSection(getCurrSection(currSectionIndex));
	}
	prevScrollTop = currScrollTop;
}

// const createSectionsThreshold = (numOfSections, maxScroll) => {

// }

const getCurrSection = (index) => {
	return sections[index];
}

const dispCurrSection = (section) => {
	sections.forEach(section => section.classList.add('invisible')); //exclude current section and add 'invisible'
	section.classList.remove('invisible');
}

const detectScrollDirection = (prev, curr) => {
	return userIsScrollingDown = curr > prev ? true : false
}