import { useProducts } from '@/api/hooks'; // ← твой хук
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productsSlice';
import { AppDispatch, RootState } from '../redux/store';

const ProductsFromReduxScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products);

  const { products: apiProducts, loading, error } = useProducts();

  useEffect(() => {
    if (apiProducts.length > 0) {
      dispatch(setProducts(apiProducts));
    }
  }, [apiProducts, dispatch]);


  console.log('ProductsFromReduxScreen rendered with products:', products);
  

  return (
    <SafeAreaView style={styles.safe}>
      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      )}

      {error && (
        <View style={styles.center}>
          <Text style={styles.error}>Failed to fetch products</Text>
        </View>
      )}

      {!loading && !error && (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
          ListEmptyComponent={<Text>No products loaded</Text>}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red', fontSize: 16 },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  title: { fontSize: 16 },
});

export default ProductsFromReduxScreen;