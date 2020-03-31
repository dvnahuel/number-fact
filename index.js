const fact = document.querySelector('#fact');
const factText = document.querySelector('#factText');
const numberInput = document.querySelector('#numberInput');
const loader = document.querySelector('.loader');

numberInput.addEventListener('input', getFactFetch);
function getFactFetch() {
  let number = numberInput.value;

  if (number != '') {
    //Star Loading
    loader.style.display = 'block';
    fact.style.display = 'block';

    fetch('http://numbersapi.com/' + number)
      .then(response => response.text())
      .then(data => {
        factText.innerText =  `"${data}"`;
      })
      .catch(err => console.log(err))
      .finally(() => {
        //Finish loading
        loader.style.display = 'none';
      })
  }
}
