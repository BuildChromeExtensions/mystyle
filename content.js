
// create image element
const imagepath = chrome.runtime.getURL('logo.png');
const img = document.createElement('img');
img.src = imagepath;

// create button element
const button = document.createElement('button');
button.classList.add('mystyle-button'); //use content.css

// append image to button
button.appendChild(img);

// append to web page
document.body.appendChild(button);

// when button is clicked append css to webpage
button.onclick = () => {
    const cssfilepath = chrome.runtime.getURL('web.css');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssfilepath;
    document.head.appendChild(link);
}