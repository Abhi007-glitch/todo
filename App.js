import React,{useState} from 'react';
import { Keyboard, Platform, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import Task from './component/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems,setItems] = useState([]);
  const handleAddTask = ()=>{
    Keyboard.dismiss();
    setItems([...taskItems,task])
    setTask(null);
 console.log(task);
  }

  const deleteTask = function(idx){
     let orgTasks = [...taskItems];
     orgTasks.splice(idx,1);
     setItems(orgTasks);
  }

  return (
    <View style={styles.container}>
     <View style={styles.taskWrapper}>
     
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <ScrollView >
      <View style={styles.items}>
          {
            taskItems.map((item,idx)=>{
              
              return (
                
                <Task key={idx} idx={idx} text={item} deleteTask={deleteTask}></Task>
              
                )
            })
          }
      </View>
      </ScrollView>

     </View>

     <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}  />
        <TouchableOpacity onPress={()=>handleAddTask()}>  
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F029',
  },
    taskWrapper:{paddingTop:80,
                 height: "80%",
                },
    paddingHorizontal:20,
    sectionTitle:{
      marginLeft:10,
      fontSize:24,
      fontWeight:'bold'
    },
    items:{marginTop:30},
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 40,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
});
