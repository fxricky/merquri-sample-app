import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, RefreshControl, ActivityIndicator, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux'
import * as type from '../redux/type'

// own component
import ListingItem from '../component/ListingItem'
import SearchButton from '../component/SearchButton'
import AddButton from '../component/AddButton'

//misc
import colors from '../utils/colors';

const Seperator = () => (<View style={styles.seperator} />)

const ListingScreen = (props) => {
  useEffect(() => {
    props.getData()

    // set header bar
    props.navigation.setOptions({
      headerLeft: () => <SearchButton />,
      headerRight: () => <AddButton />
    })
  }, [])

  const renderRefreshControl = () => <RefreshControl refreshing={false} onRefresh={props.getData}/>

  const renderListingItem = ({item}) => <ListingItem data={item} />

  const renderContent = () => {
    if(props.loading){
      return(
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.themeColor} size={'large'}/>
        </View>
      )
    }

    return(
      <FlatList 
        contentContainerStyle={styles.flatlistContentContainer}
        data={props.listingData}
        renderItem={renderListingItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Seperator />}
        refreshControl={renderRefreshControl()}
      />
    )
  }

  return (
    <View style={styles.container}>
      {renderContent()}
    </View>
  );
}

const mapStateToProps = state => {
  const {data, loading} = state.MainReducer

  return{
    listingData: data,
    loading
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch({type: type.GET_DATA})
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  seperator:{
    borderBottomWidth: 1,
    borderBottomColor: colors.grey
  },
  flatlistContentContainer: {
    paddingLeft: 10
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);
