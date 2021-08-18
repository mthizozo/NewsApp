import React from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import moment from "moment";

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import styles from "../styles"

 
const Item = ({article, navigation}) => {
    const {title, url, source, publishedAt} = article;
    const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

    return (
        <TouchableHighlight
            style={styles.container}
            underlayColor={"transparent"}
            onPress={() =>      navigation.navigate('Article', {
                article: article,
                title: title,
              }) }>
            <View style={styles.wrapper}>

                {
                    article.urlToImage == "" ? null : <Image source={{uri: article.urlToImage}} style={styles.img}/>
                }

                <View style={[styles.info]}>
                    <Text style={[styles.title]}>
                        {title}
                    </Text>

                    <View style={[styles.bottom]}>
                        <Text style={[styles.source]} onPress={() => Actions.Source({source, title: source.name})}>
                            {source.name}
                        </Text>
                        <Text style={[styles.date]}>
                            {moment(publishedAt).fromNow()}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default Item;