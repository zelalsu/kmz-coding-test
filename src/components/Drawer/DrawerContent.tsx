// navigation/DrawerContent.js
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useLazyCategoryQuery} from '../../store/api/category';
import style from './style';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();

  const [trigger, {data}] = useLazyCategoryQuery();
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

  return (
    <DrawerContentScrollView {...props} style={style.container}>
      <TouchableOpacity
        style={style.closeButton}
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
        <Text style={style.closeButtonText}>X</Text>
      </TouchableOpacity>
      <View style={style.centeredContainer}>
        {data?.data?.categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={style.itemContainer}
            onPress={() =>
              navigation.navigate('SubCategoryListScreen', {
                parentId: category.id,
              })
            }>
            <View style={style.itemTitleContainer}>
              <Text style={style.item}>{category.categoryName}</Text>
              <Text style={style.item}>{'>'}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
