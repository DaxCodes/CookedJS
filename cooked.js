var styling = document.createElement('style');
styling.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  #cookedJSOpen{
      bottom: 0;
      left: 0;
      position: absolute;
      background: grey;
      padding: 5px;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
  }
`;
document.head.appendChild(styling);

var open = document.createElement('button');
open.innerHTML = 'Open';
open.id = 'cookedJSOpen';
document.body.appendChild(open);
