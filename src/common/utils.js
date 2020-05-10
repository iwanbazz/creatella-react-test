{
  /*
    Some utility variable.
    formatCurrency: convert price to $.
    parseDateIntoRelativeTime: Utility to change date view.
    generateRandomNumbers: Randomize ascii face number.
  */
}

export const formatCurrency = (price) => {
  return price
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    })
    .toString()
    .split(/(?=(?:\d{2})+(?:\.|$))/g)
    .join(",");
};

export const parseDateIntoRelativeTime = (dateAdded) => {
  const date = new Date(dateAdded).setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);
  const diffTime = Math.abs(today - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let added = "";
  if (diffDays === 0) {
    added = "today";
  } else if (diffDays === 1) {
    added = "yesterday";
  } else if (diffDays > 1 && diffDays < 8) {
    added = diffDays + " days ago";
  } else {
    added = new Date(dateAdded).toLocaleDateString("en-US");
  }
  return added;
};

export const generateRandomNumbers = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
