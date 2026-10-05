const grid = document.getElementById('grid');

// create legend
const legend = document.querySelector('.legend-squares');
for(let i = 0; i < 5; i++) {
  const div = document.createElement('div');
  legend.appendChild(div);
}

// generate 364 squares = 52 weeks * 7 days.
for (let i = 0; i < 364; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  
  // random contributions 0-20
  const contributions = Math.floor(Math.random() * 21);
  
  // map contributions to level 0-4 like github
  let level = 0;
  if (contributions > 0) level = 1;
  if (contributions > 4) level = 2;
  if (contributions > 8) level = 3;
  if (contributions > 12) level = 4;
  
  square.setAttribute('data-level', level);
  square.title = `${contributions} contributions`;
  
  grid.appendChild(square);
}