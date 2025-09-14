import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { type } from '../theme/typography';
import { QuantityStepper } from './QuantityStepper';


export type ProductCardProps = {
    id: string;
    title: string;
    price: number;
    imageUrl?: string; // optional, placeholder if missing
    quantity: number;
    onChangeQty: ( n: number ) => void;
    onDetails?: () => void;
};


export const ProductCard: React.FC<ProductCardProps> = ( { title, price, imageUrl, quantity, onChangeQty, onDetails } ) => {
    const { width } = useWindowDimensions();
    const cardWidth = Math.min( 500, width - spacing.xl * 2 ); // simple adaptivity


    return (
        <View style={[styles.root, { width: cardWidth }]}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.img} />
            ) : (
                <View style={[styles.img, styles.placeholder]}><Text>🖼️</Text></View>
            )}


            <View style={styles.center}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={onDetails}><Text style={styles.details}>Details</Text></TouchableOpacity>
                <QuantityStepper value={quantity} onChange={onChangeQty} />
            </View>


            <View style={styles.right}>
                <Text style={styles.price}>€ {price.toFixed( 2 )}</Text>
            </View>
        </View>
    );
};


const IMG = 52;


const styles = StyleSheet.create( {
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: radius.l,
        borderWidth: 1,
        borderColor: colors.border,
        padding: spacing.m,
        marginHorizontal: spacing.l,
        marginBottom: spacing.m,
    },
    img: { width: IMG, height: IMG, borderRadius: radius.m, marginRight: spacing.m, resizeMode: 'cover', backgroundColor: colors.surface },
    placeholder: { alignItems: 'center', justifyContent: 'center' },
    center: { flex: 1 },
    right: { alignSelf: 'flex-start' },
    title: { fontSize: type.bodyLg, fontWeight: '600' },
    details: { color: colors.muted, fontSize: type.caption, marginTop: spacing.xs, marginBottom: spacing.s },
    price: { fontWeight: '700' },
} );