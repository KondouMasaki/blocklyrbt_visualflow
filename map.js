var Map = function() {
};
Map.prototype = 
// %%=start
{
	"map": [
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 5, 1, 1 ],
		[ 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 0, 3, 5, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
	],
	"start": {
		"x": 5,
		"y": 7,
		"direction": 0,
		"life": 20,
		"speed": 1,
		"soft": false
	},
	"hint": 'Enjoy BlocklyRbt Visal Flow !! ブロックリーロボット問題 ビジュアルフローを楽しんでね!!',
	"state": 0,
	"goals": 1,
	"patterns": 2,
	"blocksLimit": 10,
	"links": {
		"question": 'Q0-0',
		"previous": '',
		"next": ''
	},
	"useMapPreProcess": false,
	"preProcessDescription": [], // [ { "c": char, "d": str }, ... ]
	"robot": {
		"type": 6,
		"Basic": {
			"forward": true,
			"turn_right": true,
			"turn_left": true,
			"nop": true
		},
		"Standard": {
			"floor_color_is": true,
			"robot_direction_is": true,
			"movable_is": true
		},
		"Advanced": {
			"times_loop": true,
			"floor_color_loop": true,
			"movable_loop": true
		},
		"Expert": {
			"write_register": true,
			"read_register": true,
			"get_floor_color": true,
			"get_direction": true
		},
		"Enhanced": {
			"values_equal_is": true,
			"values_equal_loop": true,
			"infinity_loop": true,
			"is_movable_to": true
		},
		"Superior": {
			"add_register": true,
			"sub_register": true,
			"add_register_index": true,
			"sub_register_index": true,
			"set_register_index": true,
			"get_register_index": true
		},
		"Replete": {
			"read_cell_value": true,
			"read_cell_value_index": true,
			"write_cell_value": true,
			"values_compare": true,
			"expression_if": true,
			"expression_loop": true
		},
		"Master": {
		}
	},
	"chars": [
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
	],
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="forward" x="-150" y="-30"><next><block type="turn_right"><next><block type="nop"><next><block type="turn_left"></block></next></block></next></block></next></block></xml>',
	"map2": [],
	"chars2": [],
	"pmaps": [],	// [ <map>, ... ]
	"pcords": [],	// [ { "y": num, "x": num, "v": str }, ... ]
	
	"image_file_dir": 'img/'
}
// end=%%
;

/**
 * マップに数字以外の場合を埋め込んだ場合のプリプロセス
 */
Map.prototype.mapPreProcess = function() {
	// set map values to Map.prototype.pmaps[i], Map.prototype.pcords
	/*
	Map.prototype.pmaps = [];
	const pmaps = Map.prototype.pmaps;
	pmaps.push([]);
	pmaps.push([]);
	
	Map.prototype.pcords = [];
	const pcords = Map.prototype.pcords;
	
	function pushValue(row, x) {
		pmaps[0][row].push(x);
		pmaps[1][row].push(x);
	}
	
	for (let i = 0; i < 12; i++) {
		pmaps[0].push([]);
		pmaps[1].push([]);
		for (let j = 0; j < 12; j++) {
			const v = Map.prototype.map[i][j];
			if (isNaN(v)) {
				switch(v.toLowerCase()) {
					case "a":
						pmaps[0][i].push(0);
						pmaps[1][i].push(1);
						pcords.push({"y": i, "x": j, "v": "a"});
						break;
					case "b":
						pmaps[0][i].push(1);
						pmaps[1][i].push(0);
						pcords.push({"y": i, "x": j, "v": "b"});
						break;
					default:
						pushValue(i, 0);
						break;
				}
			}
			else {
				const n = parseInt(v);
				if (n >= 0 && n <= 5) {
					pushValue(i, n);
				}
				else {
					pushValue(i, 0);
				}
			}
		}
	}
	*/
	//console.log(pmaps);
	//console.log(Map.prototype.pmaps);
	//console.log(Map.prototype.pcords);
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	// if pettern is <empty string> selected "ぜんぶ"
	if (pattern == "") {
		pattern = 0;
	}
	
	switch(parseInt(pattern)) {
		case 0:
		case 1:
		case 2:
			Map.prototype.map[0][0] = parseInt(pattern) + 2;
			break;
			
		default:
			break;
	}
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	// t is turns value, pos is robot info { "x": num, "y": num, "direction": num }
};
