const generateHaiku = () => {
    const firstLine = ['The wren,', 'From time to time,', 'Over-ripe sushi,', 'Consider me,', 'Blowing from the west,', 'In the cicada\'s cry,'];
    const secondLine = ['Earns his living,', 'The clouds give rest,', 'The Master,', 'As one who loved poetry,', 'No sign can foretell,'];
    const thirdLine = ['Noiselessly.', 'To the moon-beholders.', 'Is full of regret.', 'And persimmons.', 'How soon it must die.', 'In the east.'];
    const names = ['Kobayahsi Issa', 'Matsuo Bashō', 'Yosa Buson', 'Masaoaka Shiki']
    // Arrays containing all possible combinations 


    firstRandomOption = Math.floor(Math.random() * firstLine.length);
    secondRandomOption = Math.floor(Math.random() * secondLine.length);
    thirdRandomOption = Math.floor(Math.random() * thirdLine.length);
    namesOption = Math.floor(Math.random() * names.length);
    // Randomly generates an index for each array

    return console.log(`${firstLine[firstRandomOption]} \n${secondLine[secondRandomOption]} \n${thirdLine[thirdRandomOption]} \n-${names[namesOption]}`);
    // returns the haiku to the user using the array and the indexs
}   

generateHaiku();