export const getTimeTaken = (milliseconds) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

  return `${hours ? `${hours}h` : ""} ${minutes ? `${minutes}m` : ""} ${
    seconds ? `${seconds}s` : ""
  }`;
};
