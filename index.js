function hack() {
    var color = [];
    for (let i = 0; i < document.querySelector('.tiles').childNodes.length; i++) {
        for (let j = 0; j < document.querySelector('.tiles').childNodes[i].childNodes.length; j++) {

            color.push(document.querySelector('.tiles').childNodes[i].childNodes[j].style.backgroundColor)
        }
    }
    var unique_color = color.filter(a => {
        return color.indexOf(a) === color.lastIndexOf(a)
    });

    for (let i = 0; i < document.querySelector('.tiles').childNodes.length; i++) {
        for (let j = 0; j < document.querySelector('.tiles').childNodes[i].childNodes.length; j++) {

            if (document.querySelector('.tiles').childNodes[i].childNodes[j].style.backgroundColor == unique_color) {
                document.querySelector('.tiles').childNodes[i].childNodes[j].style.backgroundColor = '#ffffff'
            }
        }
    }
}

const button = document.createElement('button')
button.textContent = 'hack'
button.id = 'hack'
button.style.width = '100px'
button.style.height = '50px'
$('.header').appendChild(button)

document.querySelector('#hack').addEventListener('click', () => {
    hack()
})