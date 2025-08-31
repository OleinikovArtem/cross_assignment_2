import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { spacing } from '../theme/spacing';
import { type } from '../theme/typography';


export type AppHeaderProps = {
    title?: string;
    onBack?: () => void;
    right?: React.ReactNode;
};


export const AppHeader: React.FC<AppHeaderProps> = ( { title, onBack, right } ) => (
    <View style={styles.root}>
        <View style={styles.left}>
            {onBack ? (
                <TouchableOpacity onPress={onBack} accessibilityRole="button"><Text style={styles.back}>←</Text></TouchableOpacity>
            ) : null}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View>{right}</View>
    </View>
);


const styles = StyleSheet.create( {
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.m,
    },
    left: { width: 32, alignItems: 'flex-start' },
    // right: { width: 32, alignItems: 'flex-end' },
    back: { fontSize: 20 },
    title: { fontSize: type.title, fontWeight: '600' },
} );