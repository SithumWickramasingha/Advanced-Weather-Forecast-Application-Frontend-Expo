import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Image 
          source={require('../assets/home.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('../assets/notification1.png')}
          style={styles.icon} 
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('../assets/heart.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image 
          source={require('../assets/wallet.png')}
          style={styles.icon} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,

  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#8A8A8A',
  }
});

export default NavigationBar;
