import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TypingEffect = ({ texts, duration = 25 }) => {  // Halved the duration to double the speed
  const [displayedText, setDisplayedText] = useState("");
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const typeText = () => {
      if (currentText.length < texts[index].text.length) {
        currentText = texts[index].text.substr(0, currentText.length + 1);
        setDisplayedText(currentText);
        setTimeout(typeText, duration);
      } else {
        setTimeout(() => {
            setDisplayedText(""); 
            setCurrentStyle({ color: texts[(index + 1) % texts.length].style.color });
            setTimeout(() => {
                index = (index + 1) % texts.length;
                setCurrentStyle(texts[index].style || {});
                currentText = "";
                setTimeout(typeText, duration);
            }, 2000);
        }, 2000);
      }
    };
    setCurrentStyle(texts[index].style || {});
    typeText();
  }, [texts]);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={currentStyle}>{displayedText}</Text>
      <View className='rounded-[50px]' style={[
        styles.cursor,
        {
          backgroundColor: currentStyle.color,
        }
      ]} />
    </View>
  );
}

const WellComeAnime = () => {
  return (
    <View style={styles.container}>
      <TypingEffect texts={[
        { text: "Let's invent", style: { color: 'blue', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's explore", style: { color: 'orange', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's brainstorm", style: { color: 'pink', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's build", style: { color: 'teal', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's go", style: { color: 'purple', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's create", style: { color: 'red', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's chit-chat", style: { color: 'green', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Chat GPT", style: { color: 'yellow', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's discover", style: { color: 'brown', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's collaborate", style: { color: 'grey', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } },
        { text: "Let's grow", style: { color: 'cyan', fontSize: 40, fontFamily: 'sans-serif', fontWeight: '800' } }
      ]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursor: {
    marginTop:5,
    marginLeft: 5,
    width: 30,  
    height: 30,
    borderRadius: 50,  // Adjusted for a circle shape
  },
});

export default WellComeAnime;
