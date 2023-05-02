import { Dog } from './dog';
import './style.css'
import confetti from 'canvas-confetti';

console.log('Hello Vite');

const ariel = new Dog('ariel', 'border-collie', 18, 'male', ['black', 'white'], 'carrot', 'veg');

console.log(ariel);

ariel.sayHello();

function fire(){
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

const fireBtn = document.getElementById('fire-btn');

fireBtn.addEventListener('click', fire);