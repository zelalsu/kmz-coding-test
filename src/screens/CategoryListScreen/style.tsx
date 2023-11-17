import {Dimensions, StyleSheet} from 'react-native';
const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns - 16 * 2; // Adjust margin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Ana arka plan rengi
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageSize: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  scrollView: {
    flexGrow: 1,
  },
  categoriesContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Kategori kutusunun arka plan rengi
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
  },
  categoryItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    height: 80,
    borderRadius: 8,
    elevation: 5,
    backgroundColor: '#DE5F54', // Kategori öğesinin arka plan rengi
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: itemWidth,
  },
  categoryText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF', // Kategori metni rengi
  },
  errorText: {
    marginTop: 10,
    fontSize: 14,
    color: '#ff5733',
    fontWeight: 'bold',
  },
});
export default styles;
