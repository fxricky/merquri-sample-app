import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ActivityIndicator, KeyboardAvoidingView, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native'

import {connect} from 'react-redux'
import * as type from '../redux/type'

import colors from '../utils/colors'

const Seperator = () => <View style={styles.seperator} />

const DetailScreen = (props) => {
  const {route, navigation} = props
  const [infos, setInfo] = useState(null)
  const Navigation = useNavigation()

  const firstNameInputRef = useRef(null)
  const lastNameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const phoneInputRef = useRef(null)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: renderCancelButton,
      headerRight: renderSaveButton
    })
  }, [navigation, infos])

  useEffect(() => {
    if(route.params?.id){
      const findData = props.listingData.find(obj => obj.id == route.params?.id)
      setInfo(findData)
    }
  }, [])

  const renderCancelButton = () => {
    return(
      <TouchableOpacity 
        disabled={props.saving}
        style={styles.headerButton} onPress={Navigation.goBack}>
        <Text style={styles.headerButtonTxt}>Cancel</Text>
      </TouchableOpacity>
    )
  }

  const renderSaveButton = () => {
    return(
      <TouchableOpacity
        style={styles.headerButton}
        onPress={onSaveButtonPressed}>
        <Text style={styles.headerButtonTxt}>Save</Text>
      </TouchableOpacity>
    )
  }

  const onSaveButtonPressed = () => {
    if(!infos?.firstName.trim() || !infos?.lastName.trim()){
      alert('First Name and Last Name is required.')
      return
    }

    if(infos?.email && !infos?.email.includes('@')){
      alert('Please enter a valid email.')
      return
    }

    props.saveData(infos)
  }

  const onFirstNameChanged = (text) => {
    setInfo(prev => ({
      ...prev,
      firstName: text
    }))
  }

  const onLastNameChanged = (text) => {
    setInfo(prev => ({
      ...prev,
      lastName: text
    }))
  }

  const onEmailChanged = (text) => {
    setInfo(prev => ({
      ...prev,
      email: text
    }))
  }

  const onPhoneChanged = (text) => {
    setInfo(prev => ({
      ...prev,
      phone: text
    }))
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}>
      <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.image}/>
      </View>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTxt}>Main Information</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>First Name</Text>
            <TextInput 
              ref={firstNameInputRef}
              style={styles.textInputs} 
              value={infos?.firstName} 
              onChangeText={onFirstNameChanged}
              onSubmitEditing={() => lastNameInputRef.current.focus()}/>
          </View>
          <Seperator />
          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Last Name</Text>
            <TextInput 
              ref={lastNameInputRef}
              style={styles.textInputs} 
              value={infos?.lastName} 
              onChangeText={onLastNameChanged}
              onSubmitEditing={() => emailInputRef.current.focus()}/> 
          </View>
        </View>
      </View>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTxt}>Sub Information</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Email</Text>
            <TextInput 
              ref={emailInputRef}
              style={styles.textInputs} 
              value={infos?.email} 
              onChangeText={onEmailChanged}
              onSubmitEditing={() => phoneInputRef.current.focus()}/>
          </View>
          <Seperator />
          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Phone</Text>
            <TextInput 
              ref={phoneInputRef}
              style={styles.textInputs} 
              value={infos?.phone} 
              onChangeText={onPhoneChanged} 
              keyboardType={'phone-pad'}/>
          </View>
          <Seperator />
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = state => {
  const {data, loading, saving, payload, error} = state.MainReducer

  return{
    listingData: data,
    loading,
    saving,
    payload,
    error
  }
}

const mapDispatchToProps = dispatch => ({
  saveData: (data) => dispatch({type: type.UPDATE_DATA, payload: data})
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  image: {
    backgroundColor: colors.themeColor,
    height: 80,
    width: 80,
    borderRadius: 80
  },
  seperator:{
    borderBottomWidth: 1,
    borderBottomColor: colors.grey
  },
  formContainer: {
    paddingLeft: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingRight: 10
  },
  labelTxt: {
    flex: 1.5
  },
  textInputs: {
    flex: 4,
    borderWidth: 1,
    borderColor: colors.grey,
    paddingTop: Platform.OS == 'ios' ? 3 : 0,
    paddingBottom: Platform.OS == 'ios' ? 3 : 0,
    paddingHorizontal: 5,
    borderRadius: 5
  },
  headerButton: {
    marginHorizontal: 10
  },
  headerButtonTxt: {
    color: colors.themeColor,
  },
  titleContainer: {
    backgroundColor: colors.grey,
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  titleTxt: {
    fontWeight: 'bold',
    fontSize: 15
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
