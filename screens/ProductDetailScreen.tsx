import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { Button } from '../components/Button';
import { TabBar, TabKey } from '../components/TabBar';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';


export type ProductDetailProps = {
    onBack?: () => void;
    onNavigate: ( tab: TabKey ) => void;
};


export const ProductDetailScreen: React.FC<ProductDetailProps> = ( { onBack, onNavigate } ) => {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <AppHeader title="Product title" onBack={onBack} />


                <View style={styles.card}>
                    <View style={styles.image}><Text>🖼️</Text></View>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </Text>
                    <Button title="Add to cart" onPress={() => { }} style={{ marginTop: spacing.l }} />
                </View>
            </ScrollView>
            <TabBar current="main" onNavigate={onNavigate} />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create( {
    safe: { flex: 1, backgroundColor: '#fff' },
    card: { marginHorizontal: spacing.l, backgroundColor: 'white', borderRadius: radius.l, borderWidth: 1, borderColor: colors.border, padding: spacing.l },
    image: { height: 180, backgroundColor: colors.surface, borderRadius: radius.m, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.l },
    text: { color: '#111' },
} );