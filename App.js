import React from "react";
import {View,Text, SafeAreaView,StyleSheet,FlatList} from "react-native"
import data from "./src/data.json"
import SongCard from "./src/components/SongCard"
import SearchBar from "./src/components/SearchBar";
import { useState } from "react";


const App=()=>{
  const handleSearch=(text)=>{
    const filteredList = data.filter(song=>{
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);

  };
  const renderSong = ({item})=> <SongCard song={item}/>
  const renderSeperator = ()=> <View style={styles.seperator}/>
  const [list, setList] = useState(data)

  return(
    <SafeAreaView style={styles.container}>
    <SearchBar handleSearch={handleSearch}/>
      <FlatList
      keyExtractor={item=> item.id}
      data={list}
      renderItem={renderSong}
      ItemSeparatorComponent={renderSeperator}
      />
  
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