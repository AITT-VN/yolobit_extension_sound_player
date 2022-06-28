Blockly.Blocks['yolobit_sound_start'] = {
  init: function() {
    this.jsonInit(
      {
        type: "yolobit_sound_start",
        message0: "khởi động máy nghe nhạc chân TX %1 chân RX %2",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "TX",
            "options": [
              [
                "P3",
                "pin3"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "RX",
            "options": [
              [
                "P6",
                "pin6"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],              
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],              
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        colour: "#00A06B",
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};


Blockly.Blocks['yolobit_sound_action'] = {
  init: function() {
    this.jsonInit(
      {
        type: "yolobit_sound_action",
        message0: "%1",
        args0: [
          {
            type: "field_dropdown",
            name: "action",
            options: [
              [
                "Phát nhạc",
                "play"
              ],
              [
                "Tạm dừng",
                "pause"
              ],
              [
                "Dừng phát nhạc",
                "stop"
              ],
              [
                "Phát bài nhạc kế tiếp",
                "play_next"
              ],
              [
                "Phát bài nhạc trước đó",
                "play_previous"
              ]
            ]
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#00A06B",
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};


Blockly.Blocks['yolobit_sound_vol'] = {
  init: function() {
    this.jsonInit(
      {
        type: "yolobit_sound_vol",
        message0: "mở âm lượng %1 (0-30)",
        args0: [
          {
            type: "input_value",
            name: "vol"
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#00A06B",
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};

Blockly.Blocks['yolobit_sound_playtrack'] = {
  init: function() {
    this.jsonInit(
      {
        type: "yolobit_sound_vol",
        message0: "phát bài nhạc số %1",
        args0: [
          {
            type: "input_value",
            name: "track"
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#00A06B",
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};

// Python Code

Blockly.Python['yolobit_sound_start'] = function(block) {
  // TODO: Assemble Python into code variable.
  var tx = block.getFieldValue('TX');
  var rx = block.getFieldValue('RX');
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_sound_player'] = 'from yolobit_sound_player import *';
  Blockly.Python.definitions_['create_sound'] = 'sound = machine.UART(1, baudrate=9600, rx=' + rx + '.pin, tx=' + tx + '.pin)';
  var code = '';
  return code;
};

Blockly.Python['yolobit_sound_action'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  // TODO: Assemble Python into code variable.
  var code = 'sound.write(' + dropdown_action + '())\n';
  return code;
};

Blockly.Python['yolobit_sound_vol'] = function(block) {
  var number_vol = Blockly.Python.valueToCode(block, 'vol', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'sound.write(set_volume(' + number_vol + '))\n';
  return code;
};

Blockly.Python['yolobit_sound_playtrack'] = function(block) {
  var number_track = Blockly.Python.valueToCode(block, 'track', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'sound.write(play_track(' + number_track + '))\n';
  return code;
};