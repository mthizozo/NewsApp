import React from 'react';
import {SafeAreaView,FlatList, RefreshControl, ActivityIndicator, View, StyleSheet, Text} from 'react-native';

import {connect} from 'react-redux';

import Item from "../components/Item"

import * as actions from "../actions"

import styles from '../styles'

import {Picker} from '@react-native-picker/picker';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            country : 'us'
        }
    }

    componentDidMount() {
        
        this.getNewsHeadlines(false)
    }
  
componentWillUnmount(){
  this.setState = (state, callback) => {
    return;
  }
}
    getNewsHeadlines = (refreshing = true) => {
        this.setState({refreshing});

        let c = this.props.country;
        if(c == ''){
            c = "us"
        } 
       this.props.getNewsHeadlines({c}).finally(() => this.setState({refreshing: false}));;
    }
    setCountry = (c) => {
        this.setState({refreshing:true});
        console.log("coutry")
      console.log(c)
        this.props.setCountry(c)
       this.props.getNewsHeadlines({c}).finally(() => this.setState({refreshing: false}));;
         
    }
    renderItem = ({item, index}) => {
        return <Item article={item} navigation={this.props.navigation}/>
    }
    componentDidUpdate(prevProps, prevState) {
         
          if (this.props.articles != prevProps.articles) {
           
            this.setState({country:this.props.country});
               

          }
        
    }
 
    render() {
        const {articles, isFetching, hasError,errorMsg, country} = this.props;
        console.log("is fetching" , isFetching)
         if (isFetching) return <ActivityIndicator/>
        
        else {
            return (
       <SafeAreaView style={styles.listcontainer}>  
            <View style={{margin: 10, padding:10}}><Text>Select Country</Text></View> 
                <Picker
                selectedValue={this.props.country}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setCountry(itemValue)}>
             <Picker.Item label="USA" value="us" />
             <Picker.Item label="Canada" value="ca" />
              </Picker>
              
                <FlatList
                    style={{backgroundColor:'#eaeaea', flex: 1}}
                    contentContainerStyle={{paddingVertical:5,   flexGrow: 1,}}
                    ref='listRef'
                    data={articles}
                    extraData={this.state}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getNewsHeadlines}
                        />
                    }
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={15}
                    renderItem={this.renderItem}
                    initialNumToRender={5}
                    onEndReachedThreshold={0.1}
                    keyExtractor={(item, index) => index.toString()+"_home"}
                   />
        </SafeAreaView>
            );
        }
    }
}



function mapStateToProps(state, props) {
    return {
        isFetching: state.isFetching,
        hasError: state.hasError,
        errorMsg: state.errorMsg,
        articles: state.articles,
        country: state.country
    }
}

export default connect(mapStateToProps, actions)(Home);