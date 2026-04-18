import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Pressable } from 'react-native';

const linkExt = ((url) => {
    Linking.openURL(url);
  })

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

        <Text style={{marginTop: 25, fontSize: 20, alignSelf: 'left'}}>Links de Compra!</Text>

        <Text style={styles.compra_text}>{guitars.nome} da {guitars.marca1}</Text>
        <Pressable style={styles.pressable_styles} onPress={() => linkExt(guitars.link1)}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Mercado Livre</Text>
        </Pressable>

        <Text style={styles.compra_text}>{guitars.nome} da {guitars.marca2}</Text>
        <Pressable style={styles.pressable_styles} onPress={() => linkExt(guitars.link2)}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Mercado Livre</Text>
        </Pressable>

        <Text style={styles.compra_text}>{guitars.nome} da {guitars.marca3}</Text>
        <Pressable style={styles.pressable_styles} onPress={() => linkExt(guitars.link3)}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Mercado Livre</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  compra_text: {
    marginTop: 25,
    alignSelf: 'left'
  },
  pressable_styles: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    width: 150,
    alignSelf: 'left',
  },
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