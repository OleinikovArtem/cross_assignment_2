import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { Product } from '../data/mock';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';

export type ProductDetailScreenProps = {
  product: Product;
  cartQuantities: Record<string, number>;
  onChangeQty: (id: string, qty: number) => void;
  onNavigate: (screen: string) => void;
  onBack: () => void;
};

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onNavigate,
  onChangeQty,
}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <AppHeader title={product.title} />

        <View style={styles.card}>
          <View style={styles.image}>
            <Text>🖼️</Text>
          </View>
          <Text style={styles.text}>{product.description}</Text>
          <Button
            title="Add to cart"
            onPress={() => {
              onChangeQty(product.id, 1);
              onNavigate('cart');
            }}
            style={{ marginTop: spacing.l }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  card: {
    marginHorizontal: spacing.l,
    backgroundColor: 'white',
    borderRadius: radius.l,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.l,
  },
  image: {
    height: 180,
    backgroundColor: colors.surface,
    borderRadius: radius.m,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.l,
  },
  text: { color: '#111' },
});
