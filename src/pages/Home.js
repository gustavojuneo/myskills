import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    if (newSkill) {
      setMySkills(oldState => [...oldState, newSkill]);
      setNewSkill('');
    }
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good morning!');
    } else {
      setGreeting('Good night!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Gustavo</Text>
      <Text style={styles.textGreeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, styles.skillsTitle]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <SkillCard key={item} skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textGreeting: {
    color: '#FFF',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  skillsTitle: {
    marginVertical: 50,
  },
});
