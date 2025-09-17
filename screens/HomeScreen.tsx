import React, { useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
  const { products, loading, error } = useProducts();

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
              <CategoryStrip
                items={categories}
                selectedId={selected}
                onSelect={setSelected}
              />
              <View style={{ height: spacing.m }} />
            </View>
          }
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              price={item.id} // Using id as a placeholder for price
              quantity={cartQuantities[item.id] ?? 0}
              onChangeQty={(n) => onChangeQty(item.id, n)}
              onDetails={() => onNavigate(`product/${item.id}`)}
            />
          )}
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
});
