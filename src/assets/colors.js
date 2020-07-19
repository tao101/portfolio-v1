const colors = {
  bgC: "#fdfdff",
};

const colorsDark = {
  bgC: "#212121",
};

export default function Color(darkMode, color) {
  if (darkMode) {
    return colorsDark[color];
  } else {
    return colors[color];
  }
}
