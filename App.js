import React from "react";
import {View,Text, SafeAreaView,StyleSheet,FlatList} from "react-native"
import data from "./src/data.json"
import SongCard from "./src/components/SongCard"


const App=()=>{

  const renderSong = ({item})=> <SongCard song={item}/>
  const renderSeperator = ()=> <View style={styles.seperator}/>

  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
      keyExtractor={item=> item.id}
      data={data}
      renderItem={renderSong}
      ItemSeparatorComponent={renderSeperator}
      />
      
    </View>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{flex:1},
  seperator:{
    borderWidth:1,
    borderColor:"#e0e0e0"
  }
})

export default App;