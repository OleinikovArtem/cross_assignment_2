import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>👤 Профіль користувача</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 Статистика</Text>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Загальна кількість товарів:</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Улюблені товари:</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Загальна сума замовлень:</Text>
            <Text style={styles.statValue}>€0.00</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚙️ Налаштування</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>🔔 Сповіщення</Text>
            <Text style={styles.settingValue}>Увімкнено</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>🌙 Темна тема</Text>
            <Text style={styles.settingValue}>Вимкнено</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>🌍 Мова</Text>
            <Text style={styles.settingValue}>Українська</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ℹ️ Інформація</Text>
          <Text style={styles.infoText}>
            Версія застосунку: 1.0.0{'\n'}
            Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  settingValue: {
    fontSize: 14,
    color: '#666',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
