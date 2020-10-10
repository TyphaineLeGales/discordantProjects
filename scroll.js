const scrollContainer = document.getElementById('scrollContainer');
const scrollMaxY = scrollContainer.scrollHeight;
const numberOfSections = 6;
const sections = document.querySelectorAll('div.section');
let currSection;

//divide total scrolling into 6 section
// console.log the current section

const navProgress = () => {
	// console.log('top: '  + (scrollContainer.pageYOffset || scrollContainer.scrollTop));
	// console.log(scrollContainer.scrollHeight);
	// let thresholds = createSectionsThreshold(numberOfSections, scrollMaxY );
	// console.log(scrollContainer.scrollTop % (scrollMaxY/numberOfSections));
	if(scrollContainer.scrollTop > 300) {
		dispCurrSection(getCurrSection(1));
	}

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