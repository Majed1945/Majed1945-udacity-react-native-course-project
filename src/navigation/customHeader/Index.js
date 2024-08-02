import headerStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ title, description }) => {
  const styles = headerStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => {
            console.warn("pressed")
            navigation.goBack()
          }}
        >
          <Icon name="arrow-left" style={styles.backButtonIcon} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </View>
  );
};
export default CustomHeader;
