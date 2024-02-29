import { Dimensions, StyleSheet } from "react-native";

const Device = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        width: Device.width * 4/5,
        height: Device.height /12,
        margin: 15,
        padding: 10,
        flexDirection:'row',
        alignItems:'center',
    },
    container_check: {
        width: Device.width * 4/5,
        height: Device.height /12,
        margin: 15,
        padding: 10,
        flexDirection:'row',
        alignItems:'center',
    },
    text: {
        color: 'black',
        fontSize:20,
    },
    text_check:{
        color:'black',
        fontSize:20,
        textDecorationLine:'line-through',
    },
    space:{
        width:10,
    },
})