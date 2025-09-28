import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';


export type QuantityStepperProps = {
    value: number;
    onChange: ( next: number ) => void;
    min?: number;
    max?: number;
};


export const QuantityStepper: React.FC<QuantityStepperProps> = React.memo(( { value, onChange, min = 0, max = 99 } ) => {
    const scale = useSharedValue(1);
    const valueScale = useSharedValue(1);
    
    const dec = () => {
        scale.value = withSpring(0.95, {}, () => {
            scale.value = withSpring(1);
        });
        onChange( Math.max( min, value - 1 ) );
    };
    
    const inc = () => {
        scale.value = withSpring(0.95, {}, () => {
            scale.value = withSpring(1);
        });
        onChange( Math.min( max, value + 1 ) );
    };

    // Анімація зміни значення
    React.useEffect(() => {
        valueScale.value = withTiming(1.2, { duration: 150 }, () => {
            valueScale.value = withTiming(1, { duration: 150 });
        });
    }, [value]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const animatedValueStyle = useAnimatedStyle(() => ({
        transform: [{ scale: valueScale.value }],
    }));

    return (
        <Animated.View style={[styles.root, animatedStyle]}>
            <TouchableOpacity accessibilityLabel="Decrease" onPress={dec} style={styles.btn}>
                <Text style={styles.btnTxt}>–</Text>
            </TouchableOpacity>
            <Animated.Text style={[styles.val, animatedValueStyle]}>{value}</Animated.Text>
            <TouchableOpacity accessibilityLabel="Increase" onPress={inc} style={styles.btn}>
                <Text style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
        </Animated.View>
    );
});


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