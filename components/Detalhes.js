import { View, Text, Image, StyleSheet } from 'react-native';

export default function Detalhes({ route }) {
  const { guitars } = route.params;

  return (
    <View style={{ padding: 20, display: 1}}>
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>{guitars.nome}</Text>
        <Image source={guitars.img} style={styles.img}/>
        <View style={styles.paragraph}>
          <Text style={styles.paragraph}>{guitars.desc}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'justify',
    marginTop: 20
  },
  container: {
    marginBottom: 20,
    marginTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 180,
    borderRadius: 5,
  }
})