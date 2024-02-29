import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './ToDoCard.style';
import useToDoStore from "../../store/useToDoStore";
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

function ToDoCard({ item, index }) {

    const { setIsTouch, deleteToDo } = useToDoStore();

    const handlePress = () => {
        setIsTouch(index)
    }
    console.log(index)
    return (
        <TouchableOpacity onPress={handlePress} onLongPress={() => deleteToDo(index)}>
            <View style={item.isTouch
                ? styles.container_check
                : styles.container
            }>
                {
                    item.isTouch
                        ? index % 2 === 0
                            ? <FontAwesome size={15} name="circle-check" color={'blue'} />
                            : <FontAwesome size={15} name="circle-check" color={'pink'} />
                        : index % 2 === 0
                            ? <FontAwesome size={15} name="circle" color={'blue'} />
                            : <FontAwesome size={15} name="circle" color={'pink'} />
                }
                <View style={styles.space} />
                <Text style={item.isTouch
                    ? styles.text_check
                    : styles.text}>
                    {item.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ToDoCard;