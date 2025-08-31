import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { type } from '../theme/typography';


export type OrderListItemProps = {
    date: string;
    description: string;
    price: number;
    onPress?: () => void;
};


export const OrderListItem: React.FC<OrderListItemProps> = ( { date, description, price, onPress } ) => (
    <TouchableOpacity onPress={onPress} style={styles.root}>
        <View style={{ flex: 1 }}>
            <Text style={styles.date}>date: {date}</Text>
            <Text numberOfLines={2} style={styles.desc}>{description}</Text>
        </View>
        <Text style={styles.price}>{price.toFixed( 2 )}$</Text>
        <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create( {
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.m,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    date: { fontSize: type.caption, color: colors.muted },
    desc: { fontSize: type.body, color: '#111' },
    price: { marginLeft: spacing.l, fontSize: type.body, fontWeight: '600' },
    arrow: { marginLeft: spacing.s, fontSize: 24, color: colors.muted },
} );