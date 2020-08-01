let imgArray = new Array;
let imgDivArray = new Array;
const containerDiv = document.querySelector('.container');

let createImgDivs = () => {
  for(i = 0; i <= 11; i++) {
    let imgDiv = document.createElement('div');

    imgDiv.setAttribute('class', 'imgDiv');
    imgDiv.setAttribute('id', `div_${i + 1}`);

    containerDiv.appendChild(imgDiv);
    imgDivArray.push(imgDiv);
  }
  return imgDivArray;
}

let setImgs = () => {
  for(i = 0; i <= 11; i++) {
    let imgElement = document.createElement('img');
    let imgPath = 'images/img';
    
    imgPath += `${i + 1}.jpg`;
    console.log(imgPath);
    imgElement.setAttribute('src', imgPath);
    
    imgDivArray[i].appendChild(imgElement);
    
    imgArray.push(imgElement)
  }
  return imgArray;
}

createImgDivs();
setImgs();