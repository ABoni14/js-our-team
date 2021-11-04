const btn = document.getElementById("addMemberButton");
const container = document.querySelector(".team-container");
const nameUser = document.getElementById("name").value;
const role = document.getElementById("role").value;
const img = document.getElementById("image").value;

console.log(nameUser);
console.log(role);
console.log(img);



const datiUtenti = [
  {
      img: 'img/wayne-barnett-founder-ceo.jpg',
      name: 'Wayne Barnett',
      role: 'Founder & CEO'
  },

  {
      img: 'img/angela-caroll-chief-editor.jpg',
      name: 'Angela Caroll',
      role: 'Chief Editor'
  },

  {
      img: 'img/walter-gordon-office-manager.jpg',
      name: 'Walter Gordon',
      role: 'Office Manager'
  },

  {
      img: 'img/angela-lopez-social-media-manager.jpg',
      name: 'Angela Lopez',
      role: 'Social Media Manager'
  },

  {
      img: 'img/scott-estrada-developer.jpg',
      name: 'Scott Estrada',
      role: 'Developer'
  },

  {
      img: 'img/barbara-ramos-graphic-designer.jpg',
      name: 'Barbara Ramos',
      role: 'Graphic Designer'
  }

]

for(let i in datiUtenti){
  const utente = datiUtenti[i];

  const utenteImg = utente.img;
  const utenteName = utente.name;
  const utenteRole = utente.role;

  container.innerHTML +=
  `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${utenteImg}"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${utenteName}</h3>
      <p>${utenteRole}</p>
    </div>
  </div>
  `
}

btn.addEventListener("click", function(){
  container.innerHTML +=
  `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${img}"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${nameUser}</h3>
      <p>${role}</p>
    </div>
  </div>
  `
})

function addCard (){

}