function clock() {
  const date = new Date();
  const hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const displayHours = hours % 12 || 12;

  console.log(
    ` ${displayHours}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`
  );
}

setInterval(clock, 1000);