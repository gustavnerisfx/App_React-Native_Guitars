import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';

export default function HomeScreen({navigation}) {

  const guitars = [
    {id: '01', nome: 'Stratocaster', img: require('../assets/img/strato.png'), desc: 'Uma das guitarras mais icônicas do mundo, conhecida pelo seu conforto e grande versatilidade. Possui três captadores single-coil, que entregam um som brilhante, limpo e bem definido. É muito usada em estilos como rock, blues, pop e até funk, além de contar com alavanca de tremolo para efeitos de vibrato.'},
    {id: '02', nome: 'Telecaster', img: require('../assets/img/tele.png'), desc: 'Modelo clássico e extremamente resistente, com construção simples e eficiente. Seu timbre é mais “estalado” e direto, com bastante ataque, sendo muito popular no country, rock e indie. Possui dois captadores e é valorizada pela confiabilidade e facilidade de manutenção.'},
    {id: '03', nome: 'Les Paul', img: require('../assets/img/lespaul.png'), desc: 'Conhecida pelo som encorpado, quente e com muito sustain, é uma das favoritas para rock e metal. Geralmente equipada com dois captadores humbuckers, que reduzem ruídos e proporcionam um som mais pesado. Seu corpo sólido e construção robusta contribuem para o timbre forte e marcante.'},
    {id: '04', nome: 'JazzMaster', img: require('../assets/img/jazz.png'), desc: 'Destaca-se pelo design diferente e pelo timbre mais suave e “aveludado”. Possui captadores single-coil com características únicas e um circuito eletrônico mais complexo, oferecendo diferentes opções de som. É bastante usada em indie, surf rock e shoegaze, sendo valorizada pela sua sonoridade atmosférica.'}
  ]

  return (
    <View style={styles.body}>

      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 0, marginTop: 40}}>
        <Text>Modelos de Guitarras</Text>
      </View>

      <FlatList 
        contentContainerStyle={{ paddingBottom: 50 }}
        data={guitars} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.container}>

            <Text style={{marginBottom: 7}}>{item.nome}</Text>
            <Image source={item.img} style={styles.img}/>

            <Pressable style={styles.pressable_styles} onPress={() => navigation.navigate('Sobre', { guitars: item })}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Ver</Text>
            </Pressable>
            
          </View>
           
        )}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  pressable_styles: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    width: 150,
    alignSelf: 'center',
  },

  body: {
    flex: 1
  },

  img: {
    width: 150,
    height: 180,
    borderRadius: 5,
  },

  container: {
    marginBottom: 20,
    marginTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})