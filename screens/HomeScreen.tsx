import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { CategoryStrip } from '../components/CategoryStrip';
import { IconButton } from '../components/IconButton';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/mock';
import { spacing } from '../theme/spacing';

export type HomeScreenProps = {
  cartQuantities: Record<string, number>;
  onChangeQty: (id: string, qty: number) => void;
  onNavigate: (screen: string) => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({
  cartQuantities,
  onChangeQty,
  onNavigate,
}) => {
  const [selected, setSelected] = useState('all');
  const data = useMemo(() => products, []);

  return (
    <SafeAreaView style={styles.safe}>
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
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            quantity={cartQuantities[item.id] ?? 0}
            onChangeQty={(n) => onChangeQty(item.id, n)}
            onDetails={() => onNavigate(`product/${item.id}`)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
});
