import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { OrderListItem } from '../components/OrderListItem';
import { orders } from '../data/mock';

export type OrdersScreenProps = {
  onNavigate: (screen: string) => void;
  onOpen: (id: string) => void;
};

export const OrdersScreen: React.FC<OrdersScreenProps> = ({ onNavigate, onOpen }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        ListHeaderComponent={<AppHeader title="Your Orders" />}
        data={orders}
        keyExtractor={(o) => o.id}
        renderItem={({ item }) => (
          <OrderListItem
            date={item.date}
            description={item.description}
            price={item.total}
            onPress={() => onOpen(item.id)}
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
