import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';


export type TabKey = 'index' | 'cart' | 'orders';


export type TabBarProps = {
    current: TabKey;
    onNavigate: ( k: TabKey ) => void;
};


export const TabBar: React.FC<TabBarProps> = ( { current, onNavigate } ) => (
    <View style={styles.root}>
        {( ['index', 'cart', 'orders', 'productsFromRedux'] as TabKey[] ).map( ( k ) => {
            const label = (k === 'index' ? 'main' : k)
            return (
            <TouchableOpacity key={k} onPress={() => onNavigate( k )} style={styles.tab} accessibilityRole="tab">
                <Text style={[styles.txt, current === k && styles.active]}>{label[0].toUpperCase() + label.slice( 1 )}</Text>
            </TouchableOpacity>
        )} )}
    </View>
);


const styles = StyleSheet.create( {
    root: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: 'white' },
    tab: { flex: 1, alignItems: 'center', paddingVertical: spacing.m },
    txt: { color: '#111' },
    active: { color: colors.primary, fontWeight: '700' },
} );