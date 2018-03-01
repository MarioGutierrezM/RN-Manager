import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ sizes }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={sizes || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
