import React, { useState  } from 'react';
import { TouchableOpacity, Text, View, Animated, Platform } from 'react-native';


function SortMenu() {
  const menuOptions = [    { text: 'Nearest', value: 'nearest' },    { text: 'Recent', value: 'recent' },    { text: '$ Low to High', value: 'lowToHigh' },  ];

  const handleSelectOption = (value) => {
    console.log('Selected option:', value); // Replace with sorted data
  };

  

  return (
    <View style={{ marginTop: 10 }}>
      {menuOptions.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => {
            handleSelectOption(option.value);
            setShowMenu(false);
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Sort(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [isPressed, setIsPressed] = useState(props.isPressed);
  const paddingAnim = React.useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setIsPressed(!isPressed);
    setShowMenu(!showMenu);
    Animated.timing(paddingAnim, {
      toValue: showMenu ? 0 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };


  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'; 


  const buttonStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isPressed ? '#080001' : '#F5FCFF',
    borderBottomWidth: 0,
    borderBottomColor: '#171717',
    borderLeftWidth: 0,
    borderLeftColor: '#171717',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderRadius: 0,
    
  };




  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#F5FCFF',
        height: showMenu ? 185 : 50,
        width: '50%',
        top: 181,
        left: 10,
        
        borderColor: '#171717',
        
        marginBottom: showMenu ? 150 : 0,
        
        zIndex: (isMobile && isPressed) || !isMobile ? 2 : 1,

      }}
    >
      <TouchableOpacity onPress={handlePress} style={buttonStyle}>
        <Text style={{ color: isPressed ? 'white' : 'black' }}>Sort By</Text>
      </TouchableOpacity>
      {showMenu && (
        <Animated.View
          style={{
            paddingTop: paddingAnim,
            paddingBottom: 10,
            overflow: 'hidden',
          }}
        >
          <SortMenu />
        </Animated.View>
      )}
    </View>
  );
}

export default Sort;