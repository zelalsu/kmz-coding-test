import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useLazyCategoryQuery} from '../../store/api/category';
import {Category} from '../../store/api/types';
import styles from './style';

const numColumns = 2;

const CategoryListScreen = ({navigation}: {navigation: any}) => {
  const [trigger, {data, isLoading, isSuccess, isError}] =
    useLazyCategoryQuery();

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

  const renderItem = ({item}: {item: Category}) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(item)}>
      <Text style={styles.categoryText}>{item.categoryName}</Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (category: any) => {
    navigation.navigate('SubCategoryListScreen', {
      parentId: category.id,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageSize}
            source={require('../../../assets/png/Image.jpeg')}
          />
        </View>

        <View style={styles.categoriesContainer}>
          {isLoading && <ActivityIndicator size="large" color="#ff5733" />}
          {isError && (
            <Text style={styles.errorText}>
              Maalesef, kategoriler yüklenirken bir hata oluştu.
            </Text>
          )}

          {isSuccess && (
            <FlatList
              data={data?.data?.categories}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={numColumns}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              contentContainerStyle={{padding: 16, marginTop: 10}}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default CategoryListScreen;
