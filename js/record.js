// 撤销对象
var record = {
	// 记录数组
	history: [],
	// 可撤销步数
	history_count: 20,
	// 当前步骤
	step: 0,
	// 数据缓存
	temp_data: null,
	// 返回历史记录的长度
	historyLeng() {
		var leng = this.history.length;
		return leng ? leng - 1 : 0;
	},
	// 添加记录
	add(val) {

		// 撤销途中增加，断尾
		if (this.step != this.historyLeng()) {
			console.log("断尾");
			//      ↓ x x x
			// [0,1,2,3,4,5]
			// splice(3,3)
			this.history.splice(this.step + 1);
		}

		// 20步删除首个
		if (this.step >= this.history_count - 1) {
			console.log("移除首个");
			this.history.shift();
		}

		// 添加记录
		this.history.push(val);

		// 指针指向最新记录
		this.step = this.historyLeng();

		// console.log(this.history);
	},
	// 撤销 ctrl+z
	redo() {
		//      ↓
		// [0,1,2,3]
		if (this.step > 0) {
			this.step -= 1;
			var data = this.history[this.step];
			return data;
		}
		return false;
	},
	// 恢复 ctrl+y 
	undo() {
		//        ↓
		// [0,1,2,3]
		if (this.step < this.historyLeng()) {
			this.step += 1;
			var data = this.history[this.step];
			return data;
		}
		return false;
	},
	// 拷贝指定对象
	copyJson(obj) {
		// return Object.assign({},obj);
		return JSON.parse(JSON.stringify(obj));
	},
	// 开始记录 vue实列
	start(vue) {
		this.temp_data = this.copyJson(vue.$data);
	},
	// 结束记录 vue实列
	end(vue) {
		var _this = this;
		// 初始值
		if (!this.history.length) {
			this.add({
				data: this.temp_data
			});
		}
		// 记录状态
		var data = this.copyJson(vue.$data);
		this.add({
			data: data
		});
	}
};