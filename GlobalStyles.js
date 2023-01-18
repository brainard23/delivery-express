import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        backgroundColor: "white",
        paddingTop: Platform.OS === 'android' ? 50 : 0
    },
});