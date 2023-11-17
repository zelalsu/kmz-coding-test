import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLoginMutation} from '../../store/api/login';
import {RootStackScreenProps} from '../../navigation/types';
import styles from './style';

const LoginScreen = ({navigation}: RootStackScreenProps<'LoginScreen'>) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMutation, {isLoading, isError}] = useLoginMutation();

  const saveCredentials = async (username: string, password: string) => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
    } catch (e) {
      console.error('Error saving credentials:', e);
    }
  };

  const getSavedCredentials = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedUsername && savedPassword) {
        setUsername(savedUsername);
        setPassword(savedPassword);
      }
    } catch (e) {
      console.error('Error retrieving credentials:', e);
    }
  };

  useEffect(() => {
    getSavedCredentials();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await loginMutation({username, password});

      if (result.data.status) {
        // Eğer 'data' nesnesi varsa ve 'status' true ise işlemleri gerçekleştir
        saveCredentials(username, password);
        navigation.navigate('MainNavigator', {screen: 'CategoryListScreen'});
      } else {
        console.error(
          'Login Error:',
          'Invalid login credentials or missing data.',
        );
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.altContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/png/Logo.png')}
          />
          <Text style={styles.title}>Hoşgeldiniz!</Text>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.userTitle}>Kullanıcı Adı</Text>
          <TextInput
            style={styles.input}
            placeholder="Kullanıcı Adı"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <Text style={styles.userTitle}>Şifre</Text>
          <TextInput
            style={styles.input}
            placeholder="Parola"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Giriş Yap</Text>
          )}
        </TouchableOpacity>
        {isError && (
          <Text style={styles.error}>
            Giriş başarısız. Lütfen tekrar deneyin.
          </Text>
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
