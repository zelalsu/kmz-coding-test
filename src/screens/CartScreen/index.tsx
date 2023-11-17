import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useLazyCartQuery} from '../../store/api/category';
import Header from '../../components/UI/Header';
import styles from './style';

const CartScreen = () => {
  const [trigger, {data, isError}] = useLazyCartQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await trigger();
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, [trigger]);

  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Sepet verileri yüklenirken bir hata oluştu
        </Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  const cartItems = data?.data.detail;

  return (
    <View style={styles.container}>
      <Header
        presentation="back"
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'Sepetim',
        }}
      />

      <FlatList
        data={cartItems}
        keyExtractor={item => item.cartID.toString()}
        renderItem={({item}) => (
          <View style={styles.cartItemContainer}>
            <Image
              source={{uri: item.productImage}}
              style={styles.productImage}
            />

            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.stockName}</Text>
              <Text style={styles.totalPrice}>
                {item.totalPrice} {item.currency}
              </Text>
            </View>
            {/* Butonlar görsel amaçlı eklenmiştir*/}
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.qty}</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.summaryContainer}>
        <TouchableOpacity style={styles.payment}>
          <Text style={styles.pressPayment}>Ödemeye geç</Text>
        </TouchableOpacity>
        <Text style={styles.summaryText}>
          {data?.data.basket.totalPrice} {cartItems[0].currency}
        </Text>
      </View>
    </View>
  );
};

export default CartScreen;
