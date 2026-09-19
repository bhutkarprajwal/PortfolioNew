/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};  

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector("header nav a[href*=" + id + "]").classList.add('active');
        }
    });
    //STICKY NAVBAR
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    /*====================remove Toggle icon navbar when click navbar link====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content',{ origin: 'right' });


/*==================== typed js ====================*/   

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer','Frontend Developer','Backend Developer ','Data Analyst','Fresher'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
async function fetchData() {
    try {
        const response = await fetch("skills.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch skills: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return an empty array if an error occurs
    }
}

function showSkills(skills) {
  const skillsContainer = document.getElementById("skillsContainer");
  if (!skillsContainer) {
    console.error("Element with id 'skillsContainer' not found");
    return;
  }

  let skillHTML = "";
  skills.forEach(skill => {
    skillHTML += `
      <div class="bar">
        <div class="info">
          <img src="${skill.icon}" alt="${skill.name} icon" />
          <span>${skill.name}</span>
        </div>
      </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

// ✅ Fetch skills.json dynamically
fetch("skills.json")
  .then(response => response.json())
  .then(data => showSkills(data))
  .catch(error => console.error("Error loading skills:", error));



const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: json
  })
  .then(async (response) => {
      let json = await response.json();
      if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for contacting me. I will get back to you soon.',
            confirmButtonColor: '#3085d6'
          });
          form.reset();
      } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: json.message || "Something went wrong!"
          });
      }
  })
  .catch(error => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong! Please try again.'
      });
  });
});

