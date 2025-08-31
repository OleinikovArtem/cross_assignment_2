import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { type } from '../theme/typography';


export type SearchBarProps = {
    value: string;
    onChangeText: ( t: string ) => void;
    placeholder?: string;
    suggestions?: string[]; // micro‑hints below
    onSelectSuggestion?: ( s: string ) => void;
};


export const SearchBar: React.FC<SearchBarProps> = ( { value, onChangeText, placeholder = 'Search…', suggestions = [], onSelectSuggestion } ) => {
    return (
        <View>
            <View style={styles.field}>
                <Text style={styles.icon}>🔍</Text>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={styles.input}
                    placeholderTextColor={colors.muted}
                />
            </View>


            {suggestions.length > 0 ? (
                <View style={styles.suggestions}>
                    {suggestions.map( ( s ) => (
                        <TouchableOpacity key={s} onPress={() => onSelectSuggestion?.( s )} style={styles.chip}>
                            <Text style={styles.chipTxt}>{s}</Text>
                        </TouchableOpacity>
                    ) )}
                </View>
            ) : null}
        </View>
    );
};


const styles = StyleSheet.create( {
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: radius.l,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: spacing.m,
        paddingVertical: spacing.s,
    },
    icon: { marginRight: spacing.s },
    input: { flex: 1, fontSize: type.body },
    suggestions: { flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing.s },
    chip: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: radius.m, paddingHorizontal: spacing.m, paddingVertical: spacing.xs, marginRight: spacing.s, marginBottom: spacing.s },
    chipTxt: { fontSize: type.caption, color: '#111' },
} );