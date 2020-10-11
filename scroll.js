const scrollContainer = document.getElementById('scrollContainer');
const sections = document.querySelectorAll('div.section');
const scrollThreshold = 300;
let currSectionIndex = 0 ;
let prevScrollTop, curScrollTop;


const navSections = () => {
	currSectionIndex = Math.trunc(mapRange(scrollContainer.scrollTop,0, scrollContainer.scrollHeight, 0, 7));
	dispCurrSection(sections[currSectionIndex]);
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