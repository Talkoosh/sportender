import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import genericStyles from '../style/generic';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar';

const BottomNav = () => {
    const [pageStates, setPageStates] = useState({
        map: true,
        favorites: false,
        menu: false,
    });

    const onPageChange = (currPage) => {
        const pageStatesCopy = {...pageStates}
        for(let page in pageStatesCopy){
            pageStatesCopy[page] = false; 
        }
        pageStatesCopy[currPage] = true;
        setPageStates({...pageStatesCopy})
    }

    const { brown } = genericStyles.colors;

    return (
        <View style={navStyles.navContainer}>
            <View style={navStyles.iconsContainer}>
                <TouchableOpacity onPress={() => onPageChange('menu')} style={[navStyles.iconSelector, pageStates.menu && { backgroundColor: brown }]}>
                    <FontAwesomeIcon icon={faBars} size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPageChange('favorites')} style={[navStyles.iconSelector, pageStates.favorites && { backgroundColor: brown }]}>
                    <FontAwesomeIcon icon={faStar} size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPageChange('map')} style={[navStyles.iconSelector, pageStates.map && { backgroundColor: brown }]}>
                    <FontAwesomeIcon icon={faMapLocationDot} size={22} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BottomNav;

const navStyles = StyleSheet.create({
    navContainer: {
        borderTopWidth: 1,
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: genericStyles.colors.cream,
    },
    iconsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconSelector: {
        borderLeftWidth: 1,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
