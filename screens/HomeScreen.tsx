import React, { useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useProducts } from '../api/hooks';
import { AppHeader } from '../components/AppHeader';
import { CategoryStrip } from '../components/CategoryStrip';
import { IconButton } from '../components/IconButton';
import { ProductCard } from '../components/ProductCard';
import { categories } from '../data/mock';
import { spacing } from '../theme/spacing';

export type HomeScreenProps = {
  cartQuantities: Record<string, number>;
  onChangeQty: (id: number, qty: number) => void;
  onNavigate: (screen: string) => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({
  cartQuantities,
  onChangeQty,
  onNavigate,
}) => {
  const [selected, setSelected] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { products, loading, error } = useProducts();

  // Мемоізуємо обробники подій
  const handleCategorySelect = useCallback((id: string) => {
    setSelected(id);
  }, []);

  const handleProductQtyChange = useCallback((id: number, qty: number) => {
    onChangeQty(id, qty);
  }, [onChangeQty]);

  const handleProductDetails = useCallback((id: number) => {
    onNavigate(`product/${id}`);
  }, [onNavigate]);

  // Мемоізуємо відфільтровані продукти з пошуком
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Фільтр по категорії
    if (selected !== 'all') {
      filtered = filtered.filter(product => product.category === selected);
    }
    
    // Пошук по назві
    if (searchQuery.trim()) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [products, selected, searchQuery]);

  // Мемоізуємо keyExtractor
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  // Мемоізуємо renderItem
  const renderItem = useCallback(({ item }: { item: any }) => (
    <ProductCard
      title={item.title}
      price={item.id} // Using id as a placeholder for price
      quantity={cartQuantities[item.id] ?? 0}
      rating={Math.random() * 2 + 3} // Random rating between 3-5
      onChangeQty={(n) => handleProductQtyChange(item.id, n)}
      onDetails={() => handleProductDetails(item.id)}
    />
  ), [cartQuantities, handleProductQtyChange, handleProductDetails]);

  return (
    <SafeAreaView style={styles.safe}>
      {loading && (
          <View style={styles.center}>
            <ActivityIndicator size="large" />
          </View>
      )} 
      
      {error && (
        <View style={styles.center}>
          <Text style={styles.error}>Something went wrong: {error}</Text>
        </View>
      )}

       {!loading && !error && (
           <FlatList
          ListHeaderComponent={
            <View>
              <AppHeader
                title="Helllo and Welcome!"
                right={<IconButton icon="⚙️" label="Filter" />}
              />
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Пошук товарів..."
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholderTextColor="#999"
                />
              </View>
              <CategoryStrip
                items={categories}
                selectedId={selected}
                onSelect={handleCategorySelect}
              />
              {searchQuery && (
                <View style={styles.searchResults}>
                  <Text style={styles.searchResultsText}>
                    Знайдено {filteredProducts.length} товарів
                  </Text>
                </View>
              )}
              <View style={{ height: spacing.m }} />
            </View>
          }
          data={filteredProducts}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 80 }}
          ListEmptyComponent={
            <View style={styles.center}>
              <Text>No products found.</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red', fontSize: 16 },
  searchContainer: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.s,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchResults: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.s,
  },
  searchResultsText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});
