import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const NotificationMessages = () => {
  const [notifications, setNotifications] = useState([
    "Welcome to the app!",
    "New update available!",
    "Don't forget to check your messages.",
    "System maintenance scheduled for tonight.",
    "Your order has been shipped!",
    "Your order has been shipped!",
    "Welcome to the app!",
    "New update available!",
    "Don't forget to check your messages.",
    "System maintenance scheduled for tonight.",
    "Don't forget to check your messages.",
    "System maintenance scheduled for tonight.",
    "Don't forget to check your messages.",

  ]);

  // Function to clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <SafeAreaView style={styles.messageBox}>
      {notifications.length > 0 ? (
        <View>
          <Text style={styles.button} onPress={clearNotifications}>Clear All</Text>
        </View>
      ) : (
        <View style={styles.noMessageContainer}>
          <Text style={styles.noMessageText}>No messages available here</Text>
        </View>
      )}
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false} // Hides scrollbar
      >
        {notifications.map((msg, index) => (
          <View key={index} style={styles.container}>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>{msg}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationMessages;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    textAlign: 'center',
    marginTop: -25,
  },
  messageContainer: {
    backgroundColor: '#024E4E',
    padding: 20,
    borderRadius: 20,
  },
  message: {
    color: '#fff',
    fontWeight: 'bold',
  },
  messageBox: {
    paddingBottom: 100,
  },
  button: {
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: 'right',
    bottom: 20,
    fontWeight: '500',
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 80,
  },
  noMessageContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 500, // Adjust based on layout
    left:90
  },
  noMessageText: {
    fontSize: 16,
    //color: '#aaa',
    fontStyle: 'italic',
    opacity:0.3
  },
});
