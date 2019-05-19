const colors = {
  white: "#EEE",
  light: "#B2B9C3",
  dark: "#26374B",
  primary: "#009A9A",
  secondary: "#FF2D66",
  danger: "#ff3f44"
};

const forms = {
  labelColor: colors.light,
  errorColor: colors.danger
};

const navigation = {
  headerBackground: colors.primary,
  tabBackground: colors.secondary,
  color: "#EEE",
  inactiveColor: "#EEEEEE88",
  iconSize: 28
};

const theme = Object.freeze({
  colors,
  forms,
  navigation,
  padding: 14,
  fontSize: 16
});

/*
  This function can be used to extract colors from components props
  Ex.: <MyComp primary />
  Inside "MyComp" we are able to call getColorFromProps(props) witch will return our theme`s primary color.
 */
export const getColorFromProps = (props) => {
  let finalColor = null;
  Object.keys(theme.colors).map(color => {
    if (color in props) {
      finalColor = theme.colors[color];
    }
  });

  return finalColor;
};

export default theme;
