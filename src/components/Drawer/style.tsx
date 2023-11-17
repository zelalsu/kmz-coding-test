// navigation/style.js
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Beyaz ve biraz transparan
    borderBottomRightRadius: 30,
  },
  centeredContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 16,
    color: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default style;
