import {View, Text, Image, ImageBackground, ScrollView, Button } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");


export default function App() {
  return (
    <View style={{padding:60,flex:1,backgroundColor:"plum"}}>
      <ScrollView>
      {/* <View style={{backgroundColor:"lightblue" , width:200, height:200}}></View>
      <View style={{backgroundColor:"lightgreen" , width:200, height:200}}></View> */}

      {/* <Text><Text style={{color:'white'}}>Hello</Text> Ansh</Text> */}

      {/* <Image source={logoImg} style={{width:300, height:300}}/> */}
      {/* <Image source={{uri:'https://picsum.photos/200'}} style={{width:200, height:200}}/> */}
      {/* <ImageBackground source={logoImg} style={{flex:1}}>
        <Text>Image Text</Text>
      </ImageBackground> */}
      {/* <Text>Paraashvdhaaaaaaaaaaaaaaaaaaaaaaaassdbcjlahdbkadkadvghavdfhvfkhvdkfhvkvfquehfishdliashdgkudfyudbfuybafahsdfdfjhgfkjgfagluflasdflufhgkjhfgugfwuegfwurhfreuihiuerbfh fdhkvwerkfwugfwubuwebouwuoiewhfuiqhfwigiwrfubwrguiwgbuiwrbguybwuerbiwehfwerhfourbfiwerbfiuwuerfiuwerbfiuwrbfwiuefoiuwerhfouiqhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadmshfvqehvfqirh3roroegrfhvveruveurgfweuevfrffjbsv vcxvieuffuifuegugfslfqifvqsdfhvqfuqwgefoqweegfiuwiquewbhgf3fhf ksdjfbqsudva
      </Text> */}
      {/* <Image source={logoImg} style={{width:300, height:300}}/> */}
      <Button  title='Press' onPress={()=>{
        console.log("Button Pressed.")
      }} color="midnightblue" disabled/>
      </ScrollView>
    </View>
  );
}