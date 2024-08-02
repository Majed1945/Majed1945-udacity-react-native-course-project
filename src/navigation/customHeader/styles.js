import { StyleSheet } from "react-native";
import theme from "../../../theme";

const headerStyles = () => {
  return {
    container: {
      backgroundColor: "#fff",
    },
    headerContainer: {
      height: 200,
      backgroundColor: theme.primary.p400,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      justifyContent: "center",
      paddingHorizontal: 15,
      paddingBottom: 30,
      width: "100%",
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.secondary.main,
    },
    descriptionText: {
      fontSize: 14,
      color: theme.secondary.main,
    },
    backButtonContainer: {
      position: "absolute",
      left: 15,
      top: 40,
      width: 40,
      height: 40,
      borderRadius: 20,
      zIndex:1000,
      backgroundColor: theme.primary.main,
      justifyContent: "center",
      alignItems: "center",
    },
    backButtonIcon: {
      color: "#F6F5F5",
      fontSize: 20,
    },
    textContainer: {
      flex: 1,
      justifyContent: "flex-end",
      gap: 15,
    },
  };
};

export default StyleSheet.create(headerStyles);
