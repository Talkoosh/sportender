import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import genericStyles from '../style/generic';

const BottomNav = () => {
    return (
        <View style={navStyles.navContainer}>
            <Text>BottomNav</Text>
        </View>
    );
};

export default BottomNav;

const navStyles = StyleSheet.create({
    navContainer: {
        borderWidth: 1,
        width: '100%',
        height: '100%',
    },
});
