function updateProfileInfo(profileData) {
  // Foto
  const photo = document.getElementById('profile-photo');
  if (photo) {
    photo.src = profileData.photo;
    photo.alt = profileData.name;
  }

  // Nome
  const name = document.getElementById('profile-name');
  if (name) name.innerText = profileData.name;

  // Localização
  const location = document.getElementById('profile-location');
  if (location) location.innerText = profileData.location;

  // Job / LinkedIn
  const job = document.getElementById('profile-job');
  if (job) job.innerText = profileData.job;

  // Cargo (Tratando o span interno)
  const cargoContainer = document.getElementById('profile-cargo');
  if (cargoContainer) {
    cargoContainer.innerHTML = `<span class="cargo">${profileData.cargo}</span>`;
  }

  // Telefone
  const phone = document.getElementById('profile-phone');
  if (phone) {
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone.replace(/\D/g, '')}`; // Remove caracteres não numéricos para o link
  }

  // Email
  const email = document.getElementById('profile-email');
  if (email) {
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
  }
}

function updateSoftSkills(profileData) {
  const softSkills = document.querySelector('.soft-skills');
  if (softSkills && profileData.softSkills) {
    softSkills.innerHTML = profileData.softSkills
      .map((skill) => `<li>${skill}</li>`)
      .join('');
  }
}

function updateLanguages(profileData) {
  const languages = document.querySelector('.languages');
  if (languages && profileData.languages) {
    languages.innerHTML = profileData.languages
      .map((lang) => `<li>${lang}</li>`)
      .join('');
  }
}

function updatePortfolio(profileData) {
  const portfolio = document.querySelector('.portfolio');
  if (portfolio && profileData.portfolio) {
    portfolio.innerHTML = profileData.portfolio
      .map(
        (project) => `
                <li>
                    <span class="project">${project.project}</span>
                    <a class="github" href="${project.url}" target="_blank">Ver no GitHub</a>
                </li>`,
      )
      .join('');
  }
}

function updateExperience(profileData) {
  const experience = document.querySelector('.experience');
  if (experience && profileData.experience) {
    experience.innerHTML = profileData.experience
      .map(
        (exp) => `
                <li>
                    <p class="experience">${exp.experience}</p>
                    <p class="period">${exp.period}</p>
                    <p class="description">${exp.description.replace(/\n/g, '<br>')}</p>
                </li>`,
      )
      .join('');
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const profileData = await fetchProfileData();

    if (profileData) {
      updateProfileInfo(profileData);
      updateSoftSkills(profileData);
      updateLanguages(profileData);
      updatePortfolio(profileData);
      updateExperience(profileData);
      console.log('Portfólio atualizado com sucesso!');
    } else {
      console.error('Dados do perfil não encontrados.');
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
});
