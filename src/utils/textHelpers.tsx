import React from 'react';
import { Text, TextStyle } from 'react-native';

/**
 * Converte testo con **grassetto** markdown in componenti Text React Native
 * Esempio: "Testo normale **testo in grassetto** altro testo"
 * Supporta anche: "**testo**: seguito da altro"
 */
export const parseMarkdownBold = (text: string, baseStyle?: TextStyle): React.ReactNode => {
    // Regex per trovare **testo** (non greedy, per catturare il più vicino)
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return (
        <>
            {parts.map((part, index) => {
                // Se il part inizia e finisce con **, è grassetto
                if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
                    const boldText = part.slice(2, -2); // Rimuovi **
                    return (
                        <Text key={index} style={[baseStyle, { fontWeight: '700' }]}>
                            {boldText}
                        </Text>
                    );
                }
                // Altrimenti è testo normale
                return part ? <Text key={index} style={baseStyle}>{part}</Text> : null;
            })}
        </>
    );
};
