var styling = document.createElement('style');
styling.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  #cookedJSOpen{
      bottom: 0;
      left: 0;
      position: fixed;
      background: 505050;
      color: white;
      padding: 5px;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      opacity: .5;
      transition: .25s opacity;
  }
  #cookedJSOpen:hover{
      cursor: pointer;
      opacity: 1;
  }
`;
document.head.appendChild(styling);

var open = document.createElement('button');
open.innerHTML = 'Open';
open.id = 'cookedJSOpen';
document.body.appendChild(open);
