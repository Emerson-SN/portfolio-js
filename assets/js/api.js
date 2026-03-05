async function fetchProfileData() {
  const url =
    'https://raw.githubusercontent.com/Emerson-SN/js-developer-portfolio/refs/heads/main/data/profile.json';
  const fetching = await fetch(url);
  const data = await fetching.json();
  console.log('JSON carregado:', data);
  return data;
}
