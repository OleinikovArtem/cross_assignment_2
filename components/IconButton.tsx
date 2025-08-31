import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';


export type IconButtonProps = {
    label?: string; // optional text next to icon
    icon?: string; // simple emoji/char icon for demo
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};


export const IconButton: React.FC<IconButtonProps> = ( { label, icon = '⚙️', onPress, style } ) => (
    <TouchableOpacity accessibilityRole="button" activeOpacity={0.8} onPress={onPress} style={[styles.root, style]}>
        <Text style={styles.icon}>{icon}</Text>
        {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
);


const styles = StyleSheet.create( {
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.s,
        paddingHorizontal: spacing.m,
        backgroundColor: colors.surface,
        borderRadius: radius.l,
        borderWidth: 1,
        borderColor: colors.border,
    },
    icon: { fontSize: 16, marginRight: spacing.s },
    label: { color: '#111', fontWeight: '600' },
} );