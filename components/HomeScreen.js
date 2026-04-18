import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';

export default function HomeScreen({navigation}) {


  const guitars = [
    {id: '01', nome: 'Stratocaster', img: require('../assets/img/strato.png'), desc: 'Uma das guitarras mais icônicas do mundo, conhecida pelo seu conforto e grande versatilidade. Possui três captadores single-coil, que entregam um som brilhante, limpo e bem definido. É muito usada em estilos como rock, blues, pop e até funk, além de contar com alavanca de tremolo para efeitos de vibrato.', link1: 'https://www.mercadolivre.com.br/guitarra-eletrica-squier-by-fender-classic-vibe-70s-stratocaster-hss-de-choupo-walnut-brilhante-com-diapaso-de-figueira-benjamim/p/MLB17770433#polycard_client=search-desktop&search_layout=grid&position=5&type=product&tracking_id=cb0571b7-9cf1-435d-8e65-1d0578ad6071&wid=MLB4371127537&sid=search', link2: 'https://www.mercadolivre.com.br/guitarra-eletrica-fender-american-professional-ii-stratocaster-de-amieiro-3-color-sunburst-brilhante-com-diapaso-de-pau-rosa/p/MLB18258519?pdp_filters=seller_id%3A673721625&applied_product_filters=MLB18258521&picker=true&quantity=1', link3: 'https://www.mercadolivre.com.br/guitarra-eletrica-tagima-stratocaster-escala-clara-tg-530/p/MLB34366014#polycard_client=search-desktop&search_layout=grid&position=3&type=product&tracking_id=ec2e82ed-6aac-4546-8152-d4034a8bb60d&wid=MLB4359516493&sid=search', marca1: 'Squier', marca2: 'Fender', marca3: 'Tagima'},
    {id: '02', nome: 'Telecaster', img: require('../assets/img/tele.png'), desc: 'Modelo clássico e extremamente resistente, com construção simples e eficiente. Seu timbre é mais “estalado” e direto, com bastante ataque, sendo muito popular no country, rock e indie. Possui dois captadores e é valorizada pela confiabilidade e facilidade de manutenção.', link1: 'https://www.mercadolivre.com.br/guitarra-eletrica-fender-squier-sonic-tele-lrl-wpg-cab-orientaco-direita/p/MLB27644110?pdp_filters=item_id:MLB6275246038#is_advertising=true&searchVariation=MLB27644110&backend_model=search-backend&position=1&search_layout=grid&type=pad&tracking_id=9b7fd758-e703-4927-ab56-a5ab180c2fa9&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=ZTNkZTlhM2ItNGNjNy00N2QxLTkyYTAtZTU1NDI5OGQwOThj', link2: 'https://www.mercadolivre.com.br/guitarra-eletrica-fender-player-telecaster-de-amieiro-tidepool-brilhante-com-diapaso-de-bordo/p/MLB17512912#polycard_client=search-desktop&search_layout=grid&position=5&type=product&tracking_id=ac844f7e-6ef4-4fbd-8c24-4cb7eefb77fe&wid=MLB6443909664&sid=search', link3: 'https://www.mercadolivre.com.br/guitarra-tw-55-tagima-2s-escala-clara-escudo-wh-sunburst/p/MLB18514870#polycard_client=search-desktop&search_layout=grid&position=5&type=product&tracking_id=8d3f10d9-8096-4feb-a235-b78bb5bb8664&wid=MLB6455374506&sid=search', marca1: 'Squier', marca2: 'Fender', marca3: 'Tagima'},
    {id: '03', nome: 'Les Paul', img: require('../assets/img/lespaul.png'), desc: 'Conhecida pelo som encorpado, quente e com muito sustain, é uma das favoritas para rock e metal. Geralmente equipada com dois captadores humbuckers, que reduzem ruídos e proporcionam um som mais pesado. Seu corpo sólido e construção robusta contribuem para o timbre forte e marcante.', link1: 'https://www.mercadolivre.com.br/guitarra-epiphone-les-paul-standard-60s-figured-iced-tea-burst/p/MLB55607797#polycard_client=search-desktop&search_layout=grid&position=5&type=product&tracking_id=ea497e6d-d15a-4ee5-84e6-0e285f6bc23c&wid=MLB6063784082&sid=search', link2: 'https://www.mercadolivre.com.br/guitarra-gibson-les-paul-standard-60s-unburst/p/MLB39091684#polycard_client=search-desktop&search_layout=grid&position=3&type=product&tracking_id=83dd2411-c247-4b88-b7c7-8ac3746814d2&wid=MLB6639242752&sid=search', link3: 'https://www.mercadolivre.com.br/guitarra-eletrica-strinberg-lps-series-lps230-les-paul-6-cordas-cherry-burst/p/MLB17460875#polycard_client=search-desktop&search_layout=grid&position=7&type=product&tracking_id=ab3247c8-9450-408a-9a45-e2c6296f3e81&wid=MLB4376923652&sid=search', marca1: 'Epiphone', marca2: 'Gibson', marca3: 'Strinberg'},
    {id: '04', nome: 'JazzMaster', img: require('../assets/img/jazz.png'), desc: 'Destaca-se pelo design diferente e pelo timbre mais suave e “aveludado”. Possui captadores single-coil com características únicas e um circuito eletrônico mais complexo, oferecendo diferentes opções de som. É bastante usada em indie, surf rock e shoegaze, sendo valorizada pela sua sonoridade atmosférica.', link1: 'https://www.mercadolivre.com.br/guitarra-eletrica-squier-by-fender-classic-vibe-60s-jazzmaster-de-choupo-3-color-sunburst-brilhante-com-diapaso-de-louro-indiano/p/MLB17822673#polycard_client=search-desktop&search_layout=grid&position=4&type=product&tracking_id=0ff0fed7-5c60-4a4f-b906-fa9b1bdbd4b2&wid=MLB3564103815&sid=search', link2: 'https://www.mercadolivre.com.br/guitarra-fender-player-ii-jazzmaster-rw-black/p/MLB49373021#polycard_client=search-desktop&search_layout=grid&position=2&type=product&tracking_id=3f54a870-e30e-4d10-86b1-5961098bdd8b&wid=MLB5390256468&sid=search', link3: 'https://www.mercadolivre.com.br/guitarra-eletrica-tagima-tw-series-tw-61-jazzmaster/p/MLB17481898#polycard_client=search-desktop&search_layout=grid&position=5&type=product&tracking_id=ed0164bc-5ec8-4577-935b-ecd43e1fc8e9&wid=MLB6433793070&sid=search', marca1: 'Squier', marca2: 'Fender', marca3: 'Tagima'}
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