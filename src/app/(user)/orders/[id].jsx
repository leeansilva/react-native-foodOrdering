import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import orders from '../../../../assets/data/orders';
import OrderListItem from '../../../components/OrderListItem';
import OrderItemListItem from '../../../components/OrderItemListItem';

export default function OrderDetailScreen() {
    const { id } = useLocalSearchParams();

    const order = orders.find((o) => o.id.toString() === id);

    if (!order) (
        <Text>Not found.</Text>
    );

    return (
        <View style={{ padding: 10 }}>
            <Stack.Screen options={{ title: 'Order #' + id }} />
            
            <OrderListItem order={order} />

            <FlatList
                data={order.order_items}
                renderItem={({ item }) => <OrderItemListItem item={item} />}
                contentContainerStyle={{ padding: 10, gap: 10 }}
            />
        </View>
    )
}
