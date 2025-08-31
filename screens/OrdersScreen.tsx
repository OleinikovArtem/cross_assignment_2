import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { OrderListItem } from '../components/OrderListItem';
import { TabBar, TabKey } from '../components/TabBar';
import { orders } from '../data/mock';


export type OrdersScreenProps = { onNavigate: ( tab: TabKey ) => void; onOpen: ( orderId: string ) => void };


export const OrdersScreen: React.FC<OrdersScreenProps> = ( { onNavigate, onOpen } ) => {
    return (
        <SafeAreaView style={styles.safe}>
            <FlatList
                ListHeaderComponent={<AppHeader title="Your Orders" />}
                data={orders}
                keyExtractor={( o ) => o.id}
                renderItem={( { item } ) => (
                    <OrderListItem date={item.date} description={item.description} price={item.total} onPress={() => onOpen(item.id)} />
                )}
                contentContainerStyle={{ paddingBottom: 80 }}
            />
            <TabBar current="orders" onNavigate={onNavigate} />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create( { safe: { flex: 1, backgroundColor: '#fff' } } );