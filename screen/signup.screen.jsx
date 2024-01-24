import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { TextInput, Button, ProgressBar, ActivityIndicator } from 'react-native-paper';


const windowWidth = Dimensions.get('window').width;

const Signup = ({ navigation }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCoffeeButtonPress = () => {
        console.log('Inscription OK... Café prêt ! ☕');
        navigation.navigate('Home', { name: 'Home' })
    };

    return (
        <>
            <ScrollView>
                <View style={styles.formContainer}>
                    <Image
                        source={require('../assets/adaptive-icon.png')}
                        style={styles.logo}
                    />
                    <TextInput
                        label="Nom"
                        value={nom}
                        onChangeText={(text) => setNom(text)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        label="Prénom"
                        value={prenom}
                        onChangeText={(text) => setPrenom(text)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        mode="outlined"
                        keyboardType="email-address"
                        style={styles.input}
                    />
                    <TextInput
                        label="Mot de passe"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        label="Confirmer le mot de passe"
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry
                        mode="outlined"
                        style={styles.input}
                    />
                    <Button
                        mode="contained"
                        onPress={handleCoffeeButtonPress}
                        style={styles.button}
                    >
                        Inscription
                    </Button>
                </View>
                <Button
                    onPress={() =>
                        navigation.navigate('Signin', { name: 'Signin' })
                    }
                > Page de connexion </Button>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        marginTop: 16,
    },
    container: {
        flexGrow: 1,
        paddingVertical: 16,
    },
    formContainer: {
        paddingHorizontal: 2,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 16,
    },
    input: {
        marginVertical: 8,
        width: windowWidth * 0.8,
    },
    button: {
        marginTop: 16,
        width: '50%',
    },
});

export default Signup
