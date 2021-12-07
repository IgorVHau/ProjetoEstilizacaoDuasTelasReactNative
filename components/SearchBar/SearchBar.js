import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";

const SearchBar = () => {
  return (
    <View
      style={
        styles.searchBar__unclicked
      }
    >
      <TextInput
        style={styles.input}
        placeholder="Encontre sua experiência"
      />
    </View>
  );
};

export default SearchBar;
