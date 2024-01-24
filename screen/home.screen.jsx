import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { ProgressBar, ActivityIndicator } from 'react-native-paper';
import notifee from '@notifee/react-native';
import LoadingPage from '../components/loadingpage';



const Home = ({ navigation }) => {
    const showNotification = async () => {
        const notification = await notifee.displayNotification({
            title: 'Ma Notification',
            body: 'Bonjour, voici une notification !',
        });

        console.log('Notification affichée:', notification);
    };
    const [loading, setLoading] = useState(false);

    const handleCoffeeButtonPress = (name) => {
        setLoading(true);
        setTimeout(() => {
            console.log('Inscription OK... Café prêt ! ☕');
            setLoading(false);
            navigation.navigate({ name }, { name: { name } })
        }, 1000);
    };

    return (
        <>
            {loading ? <LoadingPage /> : (
                <>
                    <Button
                        title="Page de connexion"
                        onPress={() => {
                            handleCoffeeButtonPress('Signin')
                        }
                        }
                    />
                    <Button
                        title="Page d'inscription"
                        onPress={() => {
                            handleCoffeeButtonPress('Signup')
                        }
                        }
                    />
                    <Button
                        title="Get Notif"
                        onPress={() => showNotification}
                    />

                </>
            )}
        </>
    );
};


export default Home;
