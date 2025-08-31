import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';


export type Category = { id: string; label: string };


export type CategoryStripProps = {
    items: Category[];
    selectedId?: string;
    onSelect?: ( id: string ) => void;
};


export const CategoryStrip: React.FC<CategoryStripProps> = ( { items, selectedId, onSelect } ) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
        {items.map( ( c ) => {
            const selected = c.id === selectedId;
            return (
                <TouchableOpacity key={c.id} onPress={() => onSelect?.( c.id )} style={[styles.chip, selected && styles.chipSelected]}>
                    <Text style={[styles.txt, selected && styles.txtSelected]}>{c.label}</Text>
                </TouchableOpacity>
            );
        } )}
    </ScrollView>
);


const styles = StyleSheet.create( {
    row: { paddingHorizontal: spacing.l },
    chip: {
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.s,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.l,
        marginRight: spacing.s,
    },
    chipSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
    txt: { color: '#111' },
    txtSelected: { color: 'white', fontWeight: '600' },
} );