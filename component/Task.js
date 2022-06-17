import React from 'react'
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import { TouchableOpacity } from 'react-native';




function Task(props) {
    let handleDelete = ()=>{
        props.deleteTask(props.idx);
     }

  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        
      
        <TouchableOpacity onPress={handleDelete}>
        <View >
           <View style={styles.circular}></View>
        </View>
        </TouchableOpacity>
    </View>
  )
}
// styles object and style props used to style component

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#FFF",
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
       flexDirection:'row',
       alignItems:'center',
       flexWrap:'wrap', 
    },
    square:{
        width: 24,
       height: 24,
       backgroundColor:'#C4BD53',
     opacity: 0.4,
     borderRadius:15,
     marginRight:15 },
    itemText:{
        maxWidth:"80%",

    },
    
    circular:{
        width: 12,
        height:12,
        borderColor:"#5FEC65",
        borderWidth:2,
        borderRadius:5,
        marginRight:5
    }
});
export default Task