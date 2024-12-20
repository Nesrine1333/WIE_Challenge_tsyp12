import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const FooterMentor = ({ navigation, activeTab }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[styles.footerButton,
        activeTab === 'HomeScreenAdmin' && styles.activeButton]}
        onPress={() => navigation.navigate('HomeScreenAdmin')}
      >
        <Image
          source={require('../../assets/home.png')}
          style={[styles.footerIcon,
          activeTab === 'HomeScreenAdmin' && styles.activeIcon,]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.footerButton,
        activeTab === 'MentorDashboard' && styles.activeButton]}
        onPress={() => navigation.navigate('MentorDashboard')}
      >
        <Image
          source={require('../../assets/task-list.png')}
          style={[styles.footerIcon,
          activeTab === 'MentorDashboard' && styles.activeIcon,]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Image
          source={require('../../assets/logout.png')}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerIcon: {
    width: 24,
    height: 24,
  },
  activeIcon: {
    tintColor: '#d87123',
  },

  footer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderColor: '#59426A',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#d87123',
    borderRadius: 5
  },
  activeText: {
    color: '#d8ae23',
  },
});

export default FooterMentor;
