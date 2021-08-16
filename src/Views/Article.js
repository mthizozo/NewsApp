
import React from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';

import * as actions from "../actions"
const { getNewsHeadlines } = home;

class Article extends React.Component {


}


const mapStateToProps = (state) => {
    return {
      userid: state.userid,
    };
  };
  
  export default connect(mapStateToProps, actions)(Article);