const colors = {
  bgC: "#fdfdff",
  blue: "#00C3FF",
  white: "#F9F9F9",
  headline: "#333333",
  skills: "#F9F9F9",
  bgLight: "#FFFFFF",
};

const colorsDark = {
  bgC: "#242325",
  blue: "#00C3FF",
  white: "#F9F9F9",
  headline: "#FFFFFF",
  skills: "#2B2A2A",
  bgLight: "#424242",
};

export default function Color(darkMode, color) {
  if (darkMode) {
    return colorsDark[color];
  } else {
    return colors[color];
  }
}
