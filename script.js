let main = document.querySelector('main')
let card = document.querySelector('#card')

const users = [
  {
    fullName: "Lisa Desuza",
    profession: "Product Designer",
    description: "Lisa Desuzagit simple, usable interfaces for mobile apps.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
  },
  {
    fullName: "Ritik Sharma",
    profession: "Data Analyst",
    description: "Ritik turns raw data into insights.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80"
  },

  {
    fullName: "Kabir Singh",
    profession: "UI Developer",
    description: "Kabir creates modern UI layouts with smooth interactions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },

  {
    fullName: "Dev Patel",
    profession: "Backend Developer",
    description: "Dev builds scalable backend APIs.",
    image: "//images.unsplash.com/photo-1604145559206-e3bce0040e2d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];




users.forEach((c)=>{
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = 
          `
            <img src="${c.image}" alt="">
            <h2>${c.fullName}</h2>
            <h3>${c.profession}</h3>
            <p>${c.description}</p>
        `

    
    main.appendChild(div)
})

