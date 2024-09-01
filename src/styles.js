import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    width: '60%',
    padding: 5,
    textAlign: 'center',
  },
  botaoPersonalizado: {
    marginTop: 10,
    width: '50%',
    padding: 10,
    backgroundColor: '#7DDA58',
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});