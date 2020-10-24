const letterDict = {
    A: [21, 40], 
    B: [41, 60],
    C: [61, 80],
    D: [81, 100],
    E: [101, 120],
    F: [121, 140],
    G: [141, 160],
    H: [161, 180],
    I: [181, 200],
    J: [201, 220],
    K: [221, 240],
    L: [241, 260],
    M: [261, 280],
    N: [281, 300],
    O: [301, 320],
    P: [321, 340],
    Q: [341, 360],
    R: [361, 380],
    S: [381, 400],
    T: [401, 420],
    U: [421, 440],
    V: [441, 460],
    W: [461, 480],
    X: [481, 500],
  };
  
  
const numDict = {
    1: [21, 40],
    2: [41, 60],
    3: [61, 80],
    4: [81, 100],
    5: [101, 120],
    6: [121, 140],
    7: [141, 160],
    8: [161, 180],
    9: [181, 200],
    10: [201, 220],
    11: [221, 240],
    12: [241, 260],
    13: [261, 280],
    14: [281, 300],
    15: [301, 320],
    16: [321, 340],
    17: [341, 360],
    18: [361, 380],
    19: [381, 400],
    20: [401, 420],
    21: [421, 440],
    22: [441, 460],
    23: [461, 480],
    24: [481, 500],
    25: [501, 520],
    26: [521, 540],
    27: [541, 560],
    28: [561, 580],
    29: [581, 600],
    30: [601, 620],
    };

    function invalidMsg(msg){
      msg.reply('Your input was formatted incorrectly, please try to format it as such: **!sketch {coordinate} {color}** or **!sketch clear**.');
      msg.channel.send('Type **!sketch help** for more info!');
    }

    function invalidColor(msg){
      msg.reply('The color provided does not follow the proper format. Please try to format it as such: **blue** or **#0000FF**.');
    }
    
    function invalidCoord(msg){
      msg.reply('The coordinates provided does not follow the proper format. Please try to format it as such: **A10**');
    }
  
    exports.invalidMsg = invalidMsg;
    exports.invalidColor = invalidColor;
    exports.invalidCoord = invalidCoord;