import { AppHeader } from '@/components/AppHeader';
import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { ProductCard } from '../components/ProductCard';
import { TabBar, TabKey } from '../components/TabBar';
import { products } from '../data/mock';
import { spacing } from '../theme/spacing';



export type CartScreenProps = {
    onNavigate: ( tab: TabKey ) => void;
    onBack?: () => void;
    cartQuantities: Record<string, number>;
    onChangeQty: ( id: string, qty: number ) => void;
};


export const CartScreen: React.FC<CartScreenProps> = ( { onNavigate, onBack, cartQuantities, onChangeQty } ) => {
    const items = useMemo( () => products.filter( ( p ) => ( cartQuantities[p.id] ?? 0 ) > 0 ), [cartQuantities] );
    const total = items.reduce( ( sum, p ) => sum + p.price * ( cartQuantities[p.id] ?? 0 ), 0 );


    const [name, setName] = useState( '' );
    const [address, setAddress] = useState( '' );


    return (
        <SafeAreaView style={styles.safe}>
            <FlatList
                ListHeaderComponent={<AppHeader title="Cart" onBack={onBack} />}
                data={items}
                keyExtractor={( item ) => item.id}
                renderItem={( { item } ) => (
                    <ProductCard
                        title={item.title}
                        price={item.price}
                        quantity={cartQuantities[item.id]}
                        onChangeQty={( n ) => onChangeQty( item.id, n )}
                    />
                )}
                ListFooterComponent={
                    <View style={{ paddingHorizontal: spacing.l, paddingBottom: spacing.xxl }}>
                        <InputField label="Name" value={name} onChangeText={setName} placeholder="Placeholder" />
                        <InputField label="Address" value={address} onChangeText={setAddress} placeholder="Placeholder" />
                        <Text style={styles.total}>Total price: {total.toFixed( 2 )}$</Text>
                        <Button title="order" onPress={() => { }} />
                    </View>
                }
            />
            <TabBar current="cart" onNavigate={onNavigate} />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#fff' },
    total: { textAlign: 'right', marginBottom: spacing.m, fontWeight: '600' },
});