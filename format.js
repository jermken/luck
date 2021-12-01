function duplicates(arr) {
	var newarr = [];
	for (var j = 0; j < arr.length; j++) {
		for (var i = j + 1; i < arr.length; i++) {
			if (arr[j] == arr[i]) {
				newarr.push(arr[i]);

			}
		}
	}
	//return [...new Set(newarr)];
	return Array.from(new Set(newarr));
}

var getDataFromTable = function () {
	let lucks = [];
	_.each($('.t_tr1'), (tr) => {
		let arr = [];
		_.each([2, 3, 4, 5, 6, 7, 8], function (i) {
			arr.push($(tr).find(`td:nth-child(${i})`).text());
		});
		lucks.push(arr);
	});
	return lucks;
};

// 根据map进行概率排序
var getMapRate = function (map) {
	let vals = Object.values(map).sort();
	let keys = Object.keys(map);
	let val2keys = [];
	let total = vals.reduce((a, b) => a + b, 0)
	vals.forEach((num) => {
		for (let i = 0; i < keys.length; i++) {
			if (map[keys[i]] === num && val2keys.indexOf(keys[i]) < 0) {
				val2keys.push(keys[i])
				break;
			}
			continue;
		}
	})
	return vals.map((v, i) => {
		return `${val2keys[i]}: 【${((v * 100) / total).toFixed(2)}%】`
	}).reverse()
}

// 统计蓝球各个数字出现概率
var getBlueSingleRate = function (arr) {
	let _map = {
		'01': 0,
		'02': 0,
		'03': 0,
		'04': 0,
		'05': 0,
		'06': 0,
		'07': 0,
		'08': 0,
		'09': 0,
		'10': 0,
		'11': 0,
		'12': 0,
		'13': 0,
		'14': 0,
		'15': 0,
		'16': 0,
	}
	arr.forEach((a) => {
		let blue = a[6];
		_map[blue] += 1;
	})
	return getMapRate(_map)
}

// 统计红球单个数字出现概率
var getRedSingleRate = function (arrs) {
	let _map = {
		'01': 0,
		'02': 0,
		'03': 0,
		'04': 0,
		'05': 0,
		'06': 0,
		'07': 0,
		'08': 0,
		'09': 0,
		'10': 0,
		'11': 0,
		'12': 0,
		'13': 0,
		'14': 0,
		'15': 0,
		'16': 0,
		'17': 0,
		'18': 0,
		'19': 0,
		'20': 0,
		'21': 0,
		'22': 0,
		'23': 0,
		'24': 0,
		'25': 0,
		'26': 0,
		'27': 0,
		'28': 0,
		'29': 0,
		'30': 0,
		'31': 0,
		'32': 0,
		'33': 0,
	}
	arrs.forEach((arr) => {
		arr.forEach((n) => {
			_map[n] += 1;
		})
	})
	return getMapRate(_map)
}

// 是否存在重复项

var isRepeatArray = function (arr) {
	return Array.from(new Set(arr)).length !== arr.length
}
