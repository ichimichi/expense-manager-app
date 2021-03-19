const stringToDate = (date) => {
  const dd = date.split("/")[0];
  const mm = date.split("/")[1];
  const yyyy = date.split("/")[2];
  return new Date(`${yyyy}/${mm}/${dd}`);
};

module.exports = {
  stringToDate,
};
