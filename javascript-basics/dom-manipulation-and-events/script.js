const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.classList.add("redPara");
para.textContent ="Hey I'm red!";
para.style.color = "red";

const h3 = document.createElement("h3");
h3.classList.add("blueh3");
h3.textContent = "Im a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.classList.add("blackDiv");
div.style.border = 'solid black 5px'
const h1 = document.createElement('h1');
const p1 = document.createElement("p");
h1.textContent = "I'm in a div!";
p1.textContent = "ME TOO";
div.appendChild(h1);
div.appendChild(p1);









container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);


