const btn = document.getElementById("addMemberButton");
const container = document.querySelector(".team-container");

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
  const oggettoUtente = datiUtenti[i];
  datiUtente(oggettoUtente)
}

btn.addEventListener('click', function(){
  const newName = document.getElementById('name').value;
  const newRole = document.getElementById('role').value;
  const newImg = document.getElementById('image').value;

  const newDatiUtenti = {
      img: newImg,
      name: newName,
      role: newRole
  };

  datiUtente(newDatiUtenti);
});

function datiUtente(oggetto){
  const card = oggetto;
  
    const cardImg = card.img;
    const cardName = card.name;
    const cardRole = card.role;
  
    container.innerHTML +=
  
    `
    <div class="team-card">
      <div class="card-image">
        <img
          src="${cardImg}"
          alt="Wayne Barnett"
        />
      </div>
      <div class="card-text">
        <h3>${cardName}</h3>
        <p>${cardRole}</p>
      </div>
    </div>
    ` 
}
