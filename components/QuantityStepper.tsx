import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';


export type QuantityStepperProps = {
    value: number;
    onChange: ( next: number ) => void;
    min?: number;
    max?: number;
};


export const QuantityStepper: React.FC<QuantityStepperProps> = ( { value, onChange, min = 0, max = 99 } ) => {
    const dec = () => onChange( Math.max( min, value - 1 ) );
    const inc = () => onChange( Math.min( max, value + 1 ) );


    return (
        <View style={styles.root}>
            <TouchableOpacity accessibilityLabel="Decrease" onPress={dec} style={styles.btn}><Text style={styles.btnTxt}>–</Text></TouchableOpacity>
            <Text style={styles.val}>{value}</Text>
            <TouchableOpacity accessibilityLabel="Increase" onPress={inc} style={styles.btn}><Text style={styles.btnTxt}>+</Text></TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create( {
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: radius.l,
        paddingHorizontal: spacing.s,
        paddingVertical: spacing.xs,
        borderWidth: 1,
        borderColor: colors.border,
    },
    btn: { paddingHorizontal: spacing.s, paddingVertical: spacing.xs },
    btnTxt: { fontSize: 16 },
    val: { minWidth: 20, textAlign: 'center' },
} );