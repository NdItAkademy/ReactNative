import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  const DefaultListes = [
    {id: 1, name: "Faire les courses" },
    {id: 2, name: "Aller à la salle de sport 3 fois par semaine" },
    {id: 3, name: "Monter à plus de 5000m d'altitude" },
    {id: 4, name: "Acheter mon premier appartement" },
    {id: 5, name: "Perdre 5 kgs" },
    {id: 6, name: "Gagner en productivité" },
    {id: 7, name: "Apprendre un nouveau langage" },
    {id: 8, name: "Faire une mission en freelance" },
    {id: 9, name: "Organiser un meetup autour de la tech" },
    {id: 10, name: "Faire un triathlon" },
  ];

  const [text, onChangeText] = React.useState('');
  const [listes, setNewTask] = useState(DefaultListes);

  const addTask = () => {
      setNewTask([...listes, { name: text }]);
      onChangeText('');
  };

  const DeleteTask = (id) => {
    const updatedListes = listes.filter((task) => task.id !== id);
    setNewTask(updatedListes);
    console.log('Tâche supprimée avec ID :', id)
  };

  return (
    <View style={styles.container}>
      <View style={styles.todoList}>
        <Text style={styles.titreTodoList}>Tâches quotidiennes</Text>
        <View style={styles.View}>
          {listes.map((liste, index) => (
            <Text style={styles.Text} key={index}>
              {liste.name}
              <TouchableOpacity
                style={styles.button}
                onPress={() => DeleteTask(liste.id)}
              >
               <View style={styles.deleteButtonContainer}>
                <Text style={styles.deleteButtonText}>Supprimer</Text>
                </View>
              </TouchableOpacity>
            </Text>
          ))}
          <TextInputExample text={text} onChangeText={onChangeText} addTask={addTask} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',  // Centrer horizontalement
    justifyContent: 'center',  // Centrer verticalement
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});


const TextInputExample = ({ text, onChangeText, addTask }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="entrez une nouvelle tâche"
      />

      <Button 
      title="Add" 
      onPress={addTask} 
      color="#f194ff" />
    </SafeAreaView>
  );
};
