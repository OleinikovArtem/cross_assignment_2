import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';


export type Category = { id: string; label: string };


export type CategoryStripProps = {
    items: Category[];
    selectedId?: string;
    onSelect?: ( id: string ) => void;
};


const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const CategoryStrip: React.FC<CategoryStripProps> = React.memo(( { items, selectedId, onSelect } ) => {
    const handleSelect = (id: string) => {
        onSelect?.(id);
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
            {items.map( ( c ) => {
                const selected = c.id === selectedId;
                return (
                    <CategoryChip 
                        key={c.id}
                        label={c.label}
                        selected={selected}
                        onPress={() => handleSelect(c.id)}
                    />
                );
            } )}
        </ScrollView>
    );
});

const CategoryChip: React.FC<{
    label: string;
    selected: boolean;
    onPress: () => void;
}> = React.memo(({ label, selected, onPress }) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handlePress = () => {
        scale.value = withSpring(0.95, {}, () => {
            scale.value = withSpring(1);
        });
        onPress();
    };

    return (
        <AnimatedTouchableOpacity 
            onPress={handlePress} 
            style={[styles.chip, selected && styles.chipSelected, animatedStyle]}
        >
            <Text style={[styles.txt, selected && styles.txtSelected]}>{label}</Text>
        </AnimatedTouchableOpacity>
    );
});


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