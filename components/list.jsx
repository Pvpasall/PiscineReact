import React, { useState } from 'react';
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper';


const MyList = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    const prenoms = [
        { prenom: 'Devin' },
        { prenom: 'Dan' },
        { prenom: 'Dominic' },
        { prenom: 'Jackson' },
        { prenom: 'James' },
        { prenom: 'Joel' },
        { prenom: 'John' },
        { prenom: 'Jillian' },
        { prenom: 'Jimmy' },
        { prenom: 'Julie' },
    ]

    const renderItem = ({ item }) => (
        <List.Item title={item.prenom} />
    );

    return (
        <ScrollView>
            <List.Section>
                <List.Subheader>Liste des prénoms</List.Subheader>
                {prenoms.map((item, index) => (
                    <List.Item key={index} title={item.prenom} />
                ))}
            </List.Section>
        </ScrollView>

    )
}

export default MyList;