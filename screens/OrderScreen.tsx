import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { TabBar, TabKey } from '../components/TabBar';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';


export type OrderScreenProps = { onBack?: () => void; onNavigate: ( tab: TabKey ) => void };


export const OrderScreen: React.FC<OrderScreenProps> = ( { onBack, onNavigate, route } ) => {
    console.log('route', route);
    
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <AppHeader title="Order" onBack={onBack} />


                <View style={{ paddingHorizontal: spacing.l, marginBottom: spacing.l }}>
                    <Text>Your Order:</Text>
                    <Text>Date: DD/MM/HHH</Text>
                </View>


                {[1, 2, 3].map( ( i ) => (
                    <View key={i} style={styles.item}>
                        <View style={styles.thumb}><Text>🖼️</Text></View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600' }}>Product name</Text>
                            <Text style={{ color: colors.muted }}>1</Text>
                        </View>
                        <Text style={{ fontWeight: '600' }}>€ 0.00</Text>
                    </View>
                ) )}


                <View style={{ alignItems: 'center', marginTop: spacing.xl }}>
                    <Text style={{ color: colors.muted }}>Status: Done / In Progress</Text>
                </View>
            </ScrollView>
            <TabBar current="orders" onNavigate={onNavigate} />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create( {
    safe: { flex: 1, backgroundColor: '#fff' },
    item: { flexDirection: 'row', alignItems: 'center', marginHorizontal: spacing.l, paddingVertical: spacing.m, borderBottomWidth: 1, borderBottomColor: colors.border },
    thumb: { width: 52, height: 52, borderRadius: radius.m, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', marginRight: spacing.m },
} );