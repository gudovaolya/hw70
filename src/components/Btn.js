import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Btn = props => (
    <TouchableOpacity style={props.btnStyle} onPress={props.pressBtn}>
        <View style={styles.btnInner}>
            <Text style={{fontSize: 30}}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    btnInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Btn;

