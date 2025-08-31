import React, { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CartScreen } from '../screens/CartScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { OrderScreen } from '../screens/OrderScreen';
import { OrdersScreen } from '../screens/OrdersScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';


export default function App() {
    type Route = 'home' | 'cart' | 'orders' | 'order' | 'product' | 'profile';
    const [route, setRoute] = useState<Route>( 'home' );


    // very small cart state for demo
    const [qty, setQty] = useState<Record<string, number>>( {} );
    const setProductQty = ( id: string, n: number ) => setQty( ( s ) => ( { ...s, [id]: n } ) );


    const Home = (<HomeScreen
        onNavigate={( t ) => setRoute( t === 'main' ? 'home' : ( t as any ) )}
        onOpenProduct={() => setRoute( 'product' )}
        cartQuantities={qty}
        onChangeQty={setProductQty}
    />)

    const Screen = useMemo( () => {
        switch ( route ) {
            case 'home': 
                return Home;
            case 'cart':
                return (
                    <CartScreen
                        onNavigate={( t ) => setRoute( t as any )}
                        onBack={() => setRoute( 'home' )}
                        cartQuantities={qty}
                        onChangeQty={setProductQty}
                    />
                );
            case 'orders':
                return <OrdersScreen onNavigate={( t ) => setRoute( t as any )} onOpen={() => setRoute( 'order' )} />;
            case 'order':
                return <OrderScreen onNavigate={( t ) => setRoute( t as any )} onBack={() => setRoute( 'orders' )} />;
            case 'product':
                return <ProductDetailScreen onNavigate={( t ) => setRoute( t as any )} onBack={() => setRoute( 'home' )} />;
            default:
                return Home;
        }
    }, [route, qty] );


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle="dark-content" />
            {Screen}
        </SafeAreaView>
    );
}