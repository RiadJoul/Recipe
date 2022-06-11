import React from "react";
import { View ,Text,StyleSheet} from "react-native";

const Landing = () => {
    return (
        <View style={styles.container}>
            <Text>Text</Text>
        </View>
    )
}

export default Landing;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});