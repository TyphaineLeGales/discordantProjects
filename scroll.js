const scrollContainer = document.getElementById('scrollContainer');
const scrollMaxY = scrollContainer.scrollHeight;
const numberOfSections = 6;

//divide total scrolling into 6 section
// console.log the current section

const navProgress = () => {
	// console.log('top: '  + (scrollContainer.pageYOffset || scrollContainer.scrollTop));
	// console.log(scrollContainer.scrollHeight);
	let thresholds = createSectionsThreshold(numberOfSections, scrollMaxY );
	console.log(scrollContainer.scrollTop % (scrollMaxY/numberOfSections));

}

const createSectionsThreshold = (numOfSections, maxScroll) => {

}