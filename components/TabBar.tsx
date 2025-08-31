import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';


export type TabKey = 'main' | 'cart' | 'orders' | 'profile';


export type TabBarProps = {
    current: TabKey;
    onNavigate: ( k: TabKey ) => void;
};


export const TabBar: React.FC<TabBarProps> = ( { current, onNavigate } ) => (
    <View style={styles.root}>
        {( ['main', 'cart', 'orders', 'profile'] as TabKey[] ).map( ( k ) => (
            <TouchableOpacity key={k} onPress={() => onNavigate( k )} style={styles.tab} accessibilityRole="tab">
                <Text style={[styles.txt, current === k && styles.active]}>{k[0].toUpperCase() + k.slice( 1 )}</Text>
            </TouchableOpacity>
        ) )}
    </View>
);


const styles = StyleSheet.create( {
    root: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: 'white' },
    tab: { flex: 1, alignItems: 'center', paddingVertical: spacing.m },
    txt: { color: '#111' },
    active: { color: colors.primary, fontWeight: '700' },
} );