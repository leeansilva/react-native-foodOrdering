import React from 'react'
import { Text, FlatList } from 'react-native'
import orders from '../../../../assets/data/orders'
import OrderItemListItem from '../../../components/OrderListItem'

export default function index() {
    return (
        <FlatList
            data={orders}
            renderItem={({ item }) => <OrderItemListItem order={item} />}
            contentContainerStyle={{padding: 10 , gap: 10}}
        />
    )
}
