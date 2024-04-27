import React, { useState } from 'react';
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from './ResultIMC';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura");
    const [IMC, setIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator() {
        const imc = (weight / (height * height)).toFixed(2);
        setIMC(imc);
    }

    function ValidationIMC() {
        if (weight !== null && height !== null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC("Seu IMC é igual:");
            setTextButton("Calcular novamente");
        } else {
            setIMC(null);
            setTextButton("Calcular");
            setMessageIMC("Preencha Peso e altura");
        }
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Exemplo: 1.70"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Exemplo: 80"
                    keyboardType="numeric"
                />
                <Button Onpress={() => ValidationIMC()} title={textButton} onPress={ValidationIMC} />
            </View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={IMC} />
        </View>
    );
}
