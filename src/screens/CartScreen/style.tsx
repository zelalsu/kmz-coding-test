import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c', // Kırmızı renk hata metni için
  },

  cartItemContainer: {
    shadowColor: '#000',
    paddingHorizontal: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: 'white', // Açık gri arka plan renk
    padding: 5,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 15,
    color: '#333',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    color: '#27ae60', // Yeşil renk fiyat için
    marginBottom: 4,
  },

  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c', // Kırmızı renk toplam fiyat için
    marginBottom: 6,
  },
  category: {
    fontSize: 16,
    color: '#9b59b6', // Mor renk kategori için
  },
  summaryContainer: {
    borderWidth: 1,
    height: 50,
    backgroundColor: '#E6E6FA', // light purple background color
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#DE5F54',
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  quantityButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantity: {
    fontWeight: 'bold',
    marginHorizontal: 8,
    fontSize: 16,
  },
  pressPayment: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#DE5F54',
    padding: 10,
    borderRadius: 20,
  },

  payment: {
    flex: 1,
    paddingRight: 20,
  },
});

export default styles;
