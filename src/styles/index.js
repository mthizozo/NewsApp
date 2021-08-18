import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';
import { textAlign } from 'styled-system';

const color = {
    black: 'rgba(0,0,0,.84)',
    light_black: '#414141',
    main: '#7A94CE',
    white: '#ffffff',
    light_grey: '#eaeaea',
    grey: '#ccc',
    red: 'red',
    underlayColor: '#ddd'
}

const fontSize = {
    small: normalize(12),
    regular: normalize(14),
    large: normalize(21),
    extralarge: normalize(28)
}

const helvetica = {
    bold: "HelveticaNeue-Bold",
    medium: "HelveticaNeue-Medium",
    regular: "Helvetica Neue",
    light: "HelveticaNeue-Light"
}

const fontFamily = helvetica;

const imageOptions = {
    allowsEditing: false,
    aspect: [4, 3],
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "#fff" : "#fff";
const selectedTabColor = (Platform.OS === "ios") ? color.main : color.main;

const tabIconStyle = { size: 21, color: tabColor, selected: selectedTabColor }
const navTitleStyle = { fontSize: fontSize.regular + 1 , fontFamily: fontFamily.semibold, color: color.black, letterSpacing: 0.4 }
const navigationBarStyle = { backgroundColor: color.black, borderBottomWidth:0 }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 10
    },

    wrapper:{
        padding: padding,
        flexDirection: "row",
        backgroundColor:"white"
    },

    img:{
        height: 75,
        width: 75,
        backgroundColor: color.light_grey,
        marginRight: padding * 1.5
    },

    info:{
        flex:1
    },
    listcontainer: {
        flex: 1,
       
      },
    picker: {
        alignSelf: 'stretch',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        color: '#000',
        backgroundColor: '#fff',
        padding: 15,
        alignContent: "center"
      },
    title:{
        fontSize: fontSize.regular,
        fontFamily: fontFamily.bold,
        color: color.black,
    },

    bottom:{
        flexDirection: "row",
        flex:1,
        marginTop:padding * 2,
    },

    source:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.main
    },

    date:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.grey,
        marginLeft: padding
    },
});


export default styles;