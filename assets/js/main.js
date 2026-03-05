function updateProfileInfo(profileData) {
  // Foto
  const photo = document.getElementById('profile-photo');
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  // Texto simples
  document.getElementById('profile-name').innerText = profileData.name;
  document.getElementById('profile-location').innerText = profileData.location;
  document.getElementById('profile-job').innerText = profileData.job;

  // O Cargo no seu HTML tem um span dentro
  const cargoContainer = document.getElementById('profile-cargo');
  if (cargoContainer) {
    cargoContainer.innerHTML = `<span class="cargo">${profileData.cargo}</span>`;
  }

  // Links (Telefone e Email)
  const phone = document.getElementById('profile-phone');
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById('profile-email');
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.querySelector('.soft-skills');
  // Mapeia o array "softSkills" do seu JSON
  softSkills.innerHTML = profileData.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join('');
}

function updateLanguages(profileData) {
  const languages = document.querySelector('.languages');
  languages.innerHTML = profileData.languages
    .map((lang) => `<li>${lang}</li>`)
    .join('');
}

function updatePortfolio(profileData) {
  const portfolio = document.querySelector('.portfolio');
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
      <li>
        <span class="project">${project.project}</span>
        <a class="github" href="${project.url}" target="_blank">Ver no GitHub</a>
      </li>`;
    })
    .join('');
}

function updateExperience(profileData) {
  const experience = document.querySelector('.experience');
  experience.innerHTML = profileData.experience
    .map((exp) => {
      return `
      <li>
        <p class="experience">${exp.experience}</p>
        <p class="period">${exp.period}</p>
        <p class="description">${exp.description.replace(/\n/g, '<br>')}</p>
      </li>`;
    })
    .join('');
}

document.addEventListener('DOMContentLoaded', async () => {
  const profileData = await fetchProfileData();

  if (profileData) {
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperience(profileData);
  }
});
