import data from '../data/thoughts.json';

const root = document.getElementById('root');

data.forEach(t => {
    const p = document.createElement('p');
    p.innerText = t.content || '';

    root.appendChild(p);
})


