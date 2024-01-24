import React, {useState} from 'react';
// import {Button, View} from 'react-native'
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';


const MyButton = () => {
    const [welcome, setWelcome] = useState(false);

    const showModal = () => setWelcome(true);
    const hideModal = () => setWelcome(false);
    const containerStyle = {backgroundColor: 'white', padding: 5};

    return (
        <PaperProvider>
            <Portal>
                <Modal visible={welcome} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Text>Bienvenu dans l'app</Text>
                </Modal>
            </Portal>
            <Button onPress={showModal}>
                Clique ici
            </Button>
        </PaperProvider>
    )
};

export default MyButton;