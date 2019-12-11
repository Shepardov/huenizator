let button = document.getElementById('hui-button');
let textHolder = document.getElementById('input-text');

let vowels = ['а', 'о', 'у', 'и', 'ы', 'ё', 'е', 'э', 'я', 'ю'];
let softVowels = ['и','ё','е','я','ю'];
let hardVowels = ['ы', 'о', 'э', 'а', 'у'];

button.addEventListener('click', (e) => {
    let text = textHolder.value;
    let index = 0;
    text = text.toLowerCase().split('');
    for(let i = 0; i < text.length; i++)
    {
        console.log(vowels.includes(text[i]), text[i]);
        if(vowels.includes(text[i])) 
        {
            index = i; break;
        }
    }
    let indexHard = hardVowels.indexOf(text[index]);
    if (indexHard != -1)
        text[index] = softVowels[indexHard];
    text = text.slice(index).join('');
    text = "ху" + text;
    document.getElementById('output').innerText = text;
});