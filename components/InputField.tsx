import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { type } from '../theme/typography';


export type InputFieldProps = {
    label: string;
    value: string;
    onChangeText: ( t: string ) => void;
    placeholder?: string;
};


export const InputField: React.FC<InputFieldProps> = ( { label, value, onChangeText, placeholder } ) => (
    <View style={styles.root}>
        <Text style={styles.label}>{label}</Text>
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={colors.muted} style={styles.input} />
    </View>
);


const styles = StyleSheet.create( {
    root: { marginBottom: spacing.l },
    label: { fontSize: type.caption, color: colors.muted, marginBottom: spacing.xs },
    input: { borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingVertical: spacing.s, paddingHorizontal: spacing.m, backgroundColor: 'white' },
} );