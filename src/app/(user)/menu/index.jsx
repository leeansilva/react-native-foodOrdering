

import { FlatList, StyleSheet, View } from 'react-native';
import { Skeleton } from 'moti/skeleton';
import ProductListItem from '../../../components/ProductListItem'
import { useProductList } from '@/src/api/products';

const skeletons = [1, 2, 3, 4, 5]

export default function MenuScreen() {

  const { data, error, isLoading } = useProductList();

  return (

    <FlatList
      data={data || skeletons}
      renderItem={({ item, index }) => (
        !isLoading || error ?
          (<ProductListItem key={item.id} product={item} />)
          :
          (<View key={index}>
            <Skeleton colorMode='light' radius={16} height={240} width={180} />
          </View>)
      )}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
