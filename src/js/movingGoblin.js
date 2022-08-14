export default setInterval(() => {
  const goblin = document.querySelector('.hole_has-goblin');

  const randomIndex = Math.floor(1 + Math.random() * 16);
  const nextGoblin = document.getElementById(`hole${randomIndex}`);

  goblin.classList.remove('hole_has-goblin');
  nextGoblin.classList.add('hole_has-goblin');
}, 2000);
