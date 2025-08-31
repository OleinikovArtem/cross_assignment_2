import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { type } from '../theme/typography';


export type ButtonProps = {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};


export const Button: React.FC<ButtonProps> = ( { title, onPress, disabled, leftIcon, style } ) => {
    return (
        <TouchableOpacity accessibilityRole="button" activeOpacity={0.8} onPress={onPress} disabled={disabled} style={[styles.root, disabled && styles.disabled, style]}>
            {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create( {
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: spacing.m,
        paddingHorizontal: spacing.xl,
        backgroundColor: colors.primary,
        borderRadius: radius.xl,
    },
    disabled: { opacity: 0.5 },
    icon: { marginRight: spacing.s },
    title: { color: 'white', fontSize: type.bodyLg, fontWeight: '600' },
} );