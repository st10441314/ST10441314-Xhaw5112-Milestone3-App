import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/n
type Course = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: any;
};

type CartItem = Course & {
  quantity: number;
};

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>EMPOWERING THE NATION</Text>
        <Text style={styles.subtitle}>EDUCATION</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Short Courses</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.missionBox}>
        <Text style={styles.missionText}>
          Empowering the nation is a company to help individuals with getting
          additional skills to help them reach a higher chance of getting
          employment and higher pay. We strive to empower the youth and give
          them a higher chance of striving in the work space.
        </Text>
      </View>
    </ScrollView>
  );
}


function CoursesScreen() {
  const courses: Course[] = [
    {
      id: 1,
      name: 'First Aid',
      description: 'Wounds and bleeding\n• Burns and fractures\n• Emergency trauma management\n• Cardio-Pulmonary Resuscitation (CPR)\n• Respiratory distress e.g. choking, blocked airway',
      price: 1500,
      image: require('./assets/firstAid.png'),
    },
    {
      id: 2,
      name: 'Sewing',
      description: 'Types of stitches\n• Threading a sewing machine\n• Sewing buttons, zips, hems and seams\n•  Alterations\n• Designing and sewing new garments',
      price: 1500,
      image: require('./assets/sewing.png'),
    },
    {
      id: 3,
      name: 'Landscaping',
      description: 'Indigenous and exotic plants and trees\n• Fixed structures (fountains, statuses, benches, tables, built-in braai)\n• Aesthetics of plant shapess and colours\n• Garden layout',
      price: 1500,
      image: require('./assets/landscaping.png'),
    },
    {
      id: 4,
      name: 'Landscaping',
      description: 'Indigenous and exotic plants and trees\n• Fixed structures (fountains, statuses, benches,  tables, built-in braai)\n• Aesthetics of plant shapess and colours\n• Garden layout',
      price: 1500,
      image: require('./assets/life.png'),
    },

  ];

  return (
    <ScrollView style={styles.container}>
      {courses.map((course) => (
        <View key={course.id} style={styles.courseCard}>
          <Image source={course.image} style={styles.courseImage} />
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
          <Text style={styles.coursePrice}>Fees: R{course.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
}


function ShortCoursesScreen() {
  const shortCourses: Course[] = [
    {
      id: 5,
      name: 'Child Minding',
      description: 'birth to six-month old baby\n• seven-month to one year old\n• Toddler needs\n• Educational toys',
      price: 750,
      image: require('./assets/child-minding.png'),
    },
    {
      id: 6,
      name: 'Cooking',
      description: 'Nutritional requirements for a healthy body\n•Types of protein, carbohydrates and vegetables\n• Planning meals\n• Preparation and cooking of meals',
      price: 750,
      image: require('./assets/cooking.png'),
    },
    {
      id: 7,
      name: 'Garden Maintenance',
      description: 'Water restrictions and the watering requirements of indigenous and exotic plants\n• Pruning and progation of plants\n• Planting tecniques for different plant types\n• Preparation and cooking of meals',
      price: 750,
      image: require('./assets/garden.png'),
    },


  ];

  return (
    <ScrollView style={styles.container}>
      {shortCourses.map((course) => (
        <View key={course.id} style={styles.courseCard}>
          <Image source={course.image} style={styles.courseImage} />
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
          <Text style={styles.coursePrice}>Fees: R{course.price}</Text>
        </View>
      ))}
    </ScrollView>
  )

function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contactContainer}>
        <View style={styles.contactItem}>
          <Image source={require('./assets/email.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Email: Empoweringthenation@gmail.com</Text>
        </View>
        
        <View style={styles.contactItem}>
          <Image source={require('./assets/whatapp.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>WhatsApp: 083 844 9056/073 224 8695</Text>
        </View>

        <View style={styles.contactItem}>
          <Image source={require('./assets/instagram.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Instagram: @Empoweringthenation_Education</Text>
        </View>

        <View style={styles.contactItem}>
          <Image source={require('./assets/facebook.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Facebook: @Empoweringthenation_Education</Text>
        </View>

        <View style={styles.contactItem}>
          <Image source={require('./assets/x.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>X: @EMP_Education</Text>
        </View>

        <View style={styles.contactItem}>
          <Image source={require('./assets/phone.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Phone: 011 415 5358</Text>
        </View>
      </View>

      <View style={styles.campusContainer}>
        <Text style={styles.campusHeader}>Our Campuses</Text>
        <Text style={styles.campusText}>Johannesburg, GP CAMPUS</Text>
        <Text style={styles.campusText}>Durban, KZN CAMPUS</Text>
        <Text style={styles.campusText}>Capetown, WC CAMPUS</Text>
      </View>
    </ScrollView>
  );
}


function ApplyScreen() {
  const [formData, setFormData] = useState({
    fullName: '',
    surname: '',
    idNumber: '',
    email: '',
    phone: '',
    selectedCourses: [] as string[],
    campus: '',
    yearIntake: '',
  });

  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>EMPOWERING THE NATION</Text>
        <Text style={styles.subtitle}>EDUCATION</Text>
      </View>
      <View style={styles.discountBox}>
        <Text style={styles.discountTitle}>Course Discounts:</Text>
        <Text style={styles.discountText}>• One course - no discount</Text>
        <Text style={styles.discountText}>• Two courses - 5% discount</Text>
        <Text style={styles.discountText}>• Three courses - 10% discount</Text>
        <Text style={styles.discountText}>• More than three courses - 15% discount</Text>
      </View>

      <Text style={styles.campusText}>Johannesburg, GP CAMPUS</Text>
      <Text style={styles.campusText}>Durban, KZN CAMPUS</Text>
      <Text style={styles.campusText}>Capetown, WC CAMPUS</Text>

      <View style={styles.applicationForm}>
        <Text style={styles.formTitle}>Application Form</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => setFormData({...formData, fullName: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={formData.surname}
          onChangeText={(text) => setFormData({...formData, surname: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="ID/Passport"
          value={formData.idNumber}
          onChangeText={(text) => setFormData({...formData, idNumber: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.phone}
          onChangeText={(text) => setFormData({...formData, phone: text})}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Campus"
          value={formData.campus}
          onChangeText={(text) => setFormData({...formData, campus: text})}
        />

         <TextInput
          style={styles.input}
          placeholder="Year of intake(2025)"
          value={formData.yearIntake}
          onChangeText={(text) => setFormData({...formData, yearIntake: text})}
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Application</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b',
          },
          headerTintColor: '#fff',
          drawerStyle: {
            backgroundColor: '#fff',
          },
          drawerLabelStyle: {
            color: '#008b8b',
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Courses" component={CoursesScreen} />
        <Drawer.Screen name="Short Courses" component={ShortCoursesScreen} />
        <Drawer.Screen name="Contact us" component={ContactScreen} />
        <Drawer.Screen name="Apply cart" component={ApplyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 170,
    height: 170,
    marginBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008b8b',

  },
  subtitle: {
    fontSize: 18,
    color: '#008b8b',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 10,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  missionBox: {
    backgroundColor: '#008b8b',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  missionText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },
  courseCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008b8b',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008b8b',
  },
  contactContainer: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  campusContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  campusHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008b8b',
    marginBottom: 10,
  },
  campusText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  discountBox: {
    backgroundColor: '#f5f5f5',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  discountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008b8b',
    marginBottom: 10,
  },
  discountText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  applicationForm: {
    padding: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008b8b',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#008b8b',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});