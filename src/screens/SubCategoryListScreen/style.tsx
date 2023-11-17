import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    marginVertical: 10,
  },
  categoryItem: {
    backgroundColor: 'rgba(222, 95, 84, 0.5)', // Soluk kırmızı renk (DE5F54)
    borderRadius: 10,
    width: 150,
    padding: 10,
    margin: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  productListContainer: {
    flex: 1,
    backgroundColor: 'rgba(192, 192, 192, 0.2)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  selectedCategoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    color: '#2c3e50',
  },

  productItem: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  productPrice: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  addToCartText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'absolute',
    bottom: 100,
    right: 0,
    backgroundColor: '#add8e6', // pastel blue background color

    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconSize: {width: 30, height: 30},
});

export default styles;
