const select = document.querySelector('#unit');
const input = document.querySelector('#input');
const unit1 = document.querySelector('#unit-one');
const unit2 = document.querySelector('#unit-two');
const unit3 = document.querySelector('#unit-three');
const output1 = document.querySelector('#unit-one-output');
const output2 = document.querySelector('#unit-two-output');
const output3 = document.querySelector('#unit-three-output');
const output = document.querySelector('#output');

output.style.display = 'none';

select.addEventListener('change', convertion);
input.addEventListener('input', convertion);
function convertion(){
    output.style.display = 'block';
    switch(select.value){
        case 'lbs':
            input.setAttribute('placeholder', 'enter lbs here...');
            unit1.firstElementChild.textContent = 'Grams:';
            output1.textContent = input.value * 453.592;

            unit2.firstElementChild.textContent = 'Kilograms:';
            output2.textContent = input.value / 2.205;

            unit3.firstElementChild.textContent = 'Ounces:';
            output3.textContent = input.value * 16;
            break;
        case 'gr':
            input.setAttribute('placeholder', 'enter gr here...');
            unit1.firstElementChild.textContent = 'Kilograms:';
            output1.textContent = input.value / 1000;

            unit2.firstElementChild.textContent = 'Ounces:';
            output2.textContent = input.value / 28.35;

            unit3.firstElementChild.textContent = 'Pounds:';
            output3.textContent = input.value / 454;
            break;
        case 'kg':
            input.setAttribute('placeholder', 'enter kg here...');
            unit1.firstElementChild.textContent = 'Grams:';
            output1.textContent = input.value * 1000;

            unit2.firstElementChild.textContent = 'Ounces:';
            output2.textContent = input.value * 35.274;

            unit3.firstElementChild.textContent = 'Pounds:';
            output3.textContent = input.value * 2.205;
            break;
        case 'oz':
            input.setAttribute('placeholder', 'enter oz here...');
            unit1.firstElementChild.textContent = 'Pounds:';
            output1.textContent = input.value / 16;

            unit2.firstElementChild.textContent = 'Grams:';
            output2.textContent = input.value * 28.35;

            unit3.firstElementChild.textContent = 'Kilograms:';
            output3.textContent = input.value / 35.274;
            break;
        default:
            break;
    }
}