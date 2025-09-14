import { AppHeader } from '@/components/AppHeader';
import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mock';
import { spacing } from '../theme/spacing';

export type CartScreenProps = {
  cartQuantities: Record<string, number>;
  onChangeQty: (id: string, qty: number) => void;
  onNavigate: (screen: string) => void;
  onBack: () => void;
};

export const CartScreen: React.FC<CartScreenProps> = ({
  cartQuantities,
  onChangeQty,
  onNavigate,
}) => {
  const items = useMemo(
    () => products.filter((p) => (cartQuantities[p.id] ?? 0) > 0),
    [cartQuantities]
  );
  const total = items.reduce(
    (sum, p) => sum + p.price * (cartQuantities[p.id] ?? 0),
    0
  );

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        ListHeaderComponent={<AppHeader title="Cart" />}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            quantity={cartQuantities[item.id]}
            onChangeQty={(n) => onChangeQty(item.id, n)}
          />
        )}
        ListFooterComponent={
          <View style={{ paddingHorizontal: spacing.l, paddingBottom: spacing.xxl }}>
            <InputField
              label="Name"
              value={name}
              onChangeText={setName}
              placeholder="Placeholder"
            />
            <InputField
              label="Address"
              value={address}
              onChangeText={setAddress}
              placeholder="Placeholder"
            />
            <Text style={styles.total}>Total price: {total.toFixed(2)}$</Text>
            <Button title="Place order" onPress={() => onNavigate('orders')} />
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  total: { textAlign: 'right', marginBottom: spacing.m, fontWeight: '600' },
});
