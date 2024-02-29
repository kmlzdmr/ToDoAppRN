import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import ToDoCard from './src/components/ToDoCard';
import useToDoStore from "./src/store/useToDoStore";
import NoTaskAnimation from "./src/components/NoTaskAnimation";

function App() {

  const { toDoList, setToDo, deleteSelected } = useToDoStore();
  const [text, setText] = useState("")

  const handleChangeText = text => {
    setText(text)
  }

  const addToDo = text => {
    if (text != "") {
      setToDo(text, false)
      setText("")
    }
  }

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#B0ACAB',
        height: 0.5,
      }}
    />
  );

  renderToDo = ({ item }) => <ToDoCard item={item} index={item.index} />

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.input_container}>
        <TextInput style={styles.input} onChangeText={handleChangeText} value={text} placeholder="....."/>
      </View>
      
      {toDoList.length === 0 ? (
        <NoTaskAnimation/>
      ) : (
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={toDoList}
          renderItem={({ item, index }) => <ToDoCard item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

<View style={styles.button_container}>
        <TouchableOpacity style={styles.button_add} onPress={() => { addToDo(text) }}>
          <Text style={styles.button_text}>
            Add Task
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_delete} onPress={deleteSelected}>
          <Text style={styles.button_text}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    flex: 1,
  },
  input: {
    backgroundColor: '#E7ECEC',
    width: 300,
    borderWidth: 3,
    padding: 10,
    borderRadius: 30,
    margin: 6,
  },
  input_container: {
    width: 300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container: {
    flexDirection: 'row',
    padding: 5,
  },
  button_add: {
    width: 150,
    backgroundColor: '#3DCEDF',
    height: 50, borderColor: 'black',
    borderWidth: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5
  },
  button_delete: {
    width: 150,
    backgroundColor: 'red',
    height: 50, borderColor: 'black',
    borderWidth: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5
  },
  button_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
})



