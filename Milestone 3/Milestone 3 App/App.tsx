import { 
  Text, 
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

function CoursesScreen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

function ShortCoursesScreen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}

function ApplyScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}


const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Courses" component={CoursesScreen} />
        <Drawer.Screen name="Short Courses" component={ShortCoursesScreen} />
        <Drawer.Screen name="Contact us" component={ContactScreen} />
        <Drawer.Screen name="Apply cart" component={ApplyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
  container: {
    color: '#008b8b',
  },


});




