import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  useAddToCartMutation,
  useLazyProductListQuery,
  useLazySubCategoryQuery,
} from '../../store/api/category';
import {Category, Product} from '../../store/api/types';
import Toast from 'react-native-toast-message';
import Header from '../../components/UI/Header';
import styles from './style';
import {RootStackScreenProps} from '../../navigation/types';
const SubCategoryListScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'SubCategoryListScreen'>) => {
  const {parentId} = route.params;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );

  // API
  const [trigger, {isSuccess}] = useLazySubCategoryQuery();
  const [addToCartMutation] = useAddToCartMutation();
  const [trigger1, {isSuccess: isSuccess1}] = useLazyProductListQuery();

  // Veri setleri
  const [categories, setCategories] = useState<Category[]>([]);
  const [productList, setProductList] = useState<Product[]>([]);

  // Kategori ve ürünleri güncelleme
  useEffect(() => {
    const fetchData = async () => {
      try {
        const subCategoriesResponse = await trigger({parentId: parentId});
        const initialCategoryId =
          subCategoriesResponse.data?.data.categories[0]?.parentId || null;

        setCategories(subCategoriesResponse.data?.data.categories || []);
        setSelectedCategoryId(initialCategoryId); // Set the initial category ID
        await trigger1({CategoryId: initialCategoryId}); // Fetch initial product list
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, [parentId, trigger, trigger1]);
  useEffect(() => {
    const fetchProductData = async (pageNumber: number = 1) => {
      if (selectedCategoryId !== null) {
        try {
          const productResponse = await trigger1({
            CategoryId: selectedCategoryId,
            PageNumber: pageNumber,
            PageSize: 10,
          });

          // Eğer ilk sayfa ise direkt set et, değilse eski verilerle birleştir
          setProductList(
            prevData =>
              pageNumber === 1
                ? productResponse.data?.data || [] // Eğer data boşsa boş bir dizi olarak ayarla
                : [...(prevData || []), ...(productResponse.data?.data || [])], // Eğer data boşsa boş bir dizi olarak ayarla
          );
        } catch (error) {
          console.error('API Error:', error);
        }
      }
    };

    fetchProductData(currentPage);
  }, [trigger1, selectedCategoryId, currentPage]);

  //Press
  const handlePagePress = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleCategoryPress = async (category: Category) => {
    try {
      setSelectedCategoryId(category.parentId);
      await trigger1({CategoryId: category.parentId});
    } catch (error) {
      console.error('API Error:', error);
    }
  };
  const handleAddToCart = async (productId: number) => {
    try {
      const response = await addToCartMutation({
        userId: 4444,
        productId: productId,
        amount: 1,
      });
      Toast.show({
        text2: response.data.data.message,
        type: 'error',
        text1: 'Başarılı',
      });
    } catch (error) {
      console.error('AddToCart Error:', error);
    }
  };

  //render
  const renderItem = ({item}: {item: Category}) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(item)}>
      <View>
        <Text style={styles.categoryText}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderProductItem = ({item}: {item: any}) => (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={() => handleAddToCart(item.id)}>
        <Text style={styles.addToCartText}>+</Text>
      </TouchableOpacity>
      <Image
        source={{uri: item.productImages[0]?.imagePath}}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>{item.stockName}</Text>
      <Text style={styles.productPrice}>{item.priceVat} TL</Text>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Header
          presentation="back"
          insetTop={true}
          textOptions={{
            shown: true,
            title: 'Kategoriler',
          }}
        />
        {isSuccess ? (
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={categories}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={styles.flatList}
            />
          </View>
        ) : (
          <ActivityIndicator size="large" color="#3498db" />
        )}
        {selectedCategoryId !== null && isSuccess1 ? (
          <>
            <View style={styles.productListContainer}>
              <Text style={styles.selectedCategoryTitle}>Ürünler</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                data={productList}
                renderItem={renderProductItem}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => handlePagePress(currentPage + 1)}
                onEndReachedThreshold={0.1}
              />
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="#3498db" />
        )}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen')}
        style={styles.cartButton}>
        <Image
          style={styles.iconSize}
          source={require('../../../assets/png/cart.png')}
        />
      </TouchableOpacity>
    </>
  );
};

export default SubCategoryListScreen;
