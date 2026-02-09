const avatar = document.getElementById("avatar");
const coin = document.getElementById("coin");

function checkCollision() {
  const avatarRect = avatar.getBoundingClientRect();
  const coinRect = coin.getBoundingClientRect();

  return !(
    avatarRect.right < coinRect.left ||
    avatarRect.left > coinRect.right ||
    avatarRect.bottom < coinRect.top ||
    avatarRect.top > coinRect.bottom
  );
}

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "ArrowRight") {
    avatar.style.left = `${avatar.offsetLeft + 50}px`;
  } else if (event.key === "ArrowLeft") {
    avatar.style.left = `${avatar.offsetLeft - 50}px`;
  } else if (event.key === "ArrowUp") {
    avatar.style.top = `${avatar.offsetTop - 50}px`;
  } else if (event.key === "ArrowDown") {
    avatar.style.top = `${avatar.offsetTop + 50}px`;
  }

  if (checkCollision()) {
    moveCoin();
  }
});

function moveCoin() {
  const randomX = Math.floor(
    Math.random() * (window.innerWidth - coin.offsetWidth),
  );
  const randomY = Math.floor(
    Math.random() * (window.innerHeight - coin.offsetHeight),
  );
  coin.style.left = `${randomX}px`;
  coin.style.top = `${randomY}px`;
}

moveCoin();
