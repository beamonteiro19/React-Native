import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { estilos } from './src/styles'; 

const App = () => {
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState({ anos: 0, meses: 0, dias: 0 });
  const [categoriaIdade, setCategoriaIdade] = useState('');

  const calcularIdade = () => {
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();

    let anos = hoje.getFullYear() - nascimento.getFullYear();
    let meses = hoje.getMonth() - nascimento.getMonth(); 
    let dias = hoje.getDate() - nascimento.getDate();

    if (dias < 0) {
      meses--;
      dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }

    if (meses < 0) {
      anos--;
      meses += 12;
    }

    definirCategoriaIdade(anos);
    setIdade({ anos, meses, dias });
  };

  const definirCategoriaIdade = (anos) => {
    if (anos < 18) {
      setCategoriaIdade('Jovem');
    } else if (anos < 60) {
      setCategoriaIdade('Adulto');
    } else {
      setCategoriaIdade('Idoso');
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}> Olá! </Text>
      <Text style={estilos.texto}> Insira sua Data de Nascimento no formato indicado</Text>
      <TextInput
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="AAAA-MM/DD"
        keyboardType="numeric"
        style={estilos.input}
      />
      <TouchableOpacity style={estilos.botaoPersonalizado} onPress={calcularIdade}>
        <Text style={estilos.textoBotao}>Calcular Idade</Text>
      </TouchableOpacity>
      {idade.anos !== 0 && (
        <>
          <Text style={estilos.texto}>
            Idade: {idade.anos} anos, {idade.meses} meses, e {idade.dias} dias.
          </Text>
          <Text style={estilos.texto}>
            Categoria de Idade: {categoriaIdade}
          </Text>
        </>
      )}
    </View>
  );
};

export default App;