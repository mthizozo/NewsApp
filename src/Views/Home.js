import React from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';

import Item from "../components/Item"

import {actions as home} from "../actions"
const { getNewsHeadlines } = home;

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false
        }
    }

    componentDidMount() {
        this.getNewsHeadlines(false)
    }

    getNewsHeadlines = (refreshing = true) => {
        this.setState({refreshing});
        this.props.getNewsHeadlines()
            .finally(() => this.setState({refreshing: false}));
    }

    renderItem = ({item, index}) => {
        return <Item article={item}/>
    }

    render() {
        const {articles, isFetching, hasError,errorMsg} = this.props;

        if (isFetching) return <ActivityIndicator/>
        else {
            return (
                <FlatList
                    style={{backgroundColor:'#eaeaea'}}
                    contentContainerStyle={{paddingVertical:5,}}
                    ref='listRef'
                    data={articles}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    initialNumToRender={5}
                    keyExtractor={(item, index) => index.toString()+"_home"}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getNewsHeadlines}
                        />
                    }/>
            );
        }
    }
}

function mapStateToProps(state, props) {
    return {
        isFetching: state.isFetching,
        hasError: state.hasError,
        errorMsg: state.errorMsg,
        articles: state.articles
    }
}

export default connect(mapStateToProps, { getNewsHeadlines })(Home);