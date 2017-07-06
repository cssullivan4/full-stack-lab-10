var library = (function () {
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var abrNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	function doubleDigit(value) {
		if (value.length === 1) {
			value = '0' + value;
		}
		return value;
	}
	function getOrdinalValue(value) {
		var suffix;
		var hundredPart = value % 100;
		if (hundredPart > 9 && hundredPart < 21) {
			suffix = 'th';
		}
		else { // only works because never go above 2 digit numbers
			var digit = value % 10 // always gives 3
			if (digit === 1) {
				suffix = 'st';
			} else if (digit === 2) {
				suffix = 'nd';
			} else if (digit === 3) {
				suffix = 'rd';
			} else {
				suffix = 'th';
			}
		}
		return value + suffix;
	}
	return {
		TimeStamp: (function () {
			return {
				UnixTimestamp: function () {
					var unixTimestampInSeconds = (new Date().getTime() / 1000);
					return Math.floor(unixTimestampInSeconds).toString();
				},
				UnixMillisecond: function () {
					return new Date().getTime().toString();
				}
			}
		})(),
		Local: (function () {
			return {
				Time: (function () {
					return {
						WithSeconds: function () {
							return new Date().toLocaleTimeString();
						},
						WithOutSeconds: function () {
							var d = new Date();
							var hours = d.getHours();
							var ampm = 'PM';
							if (hours < 12) {
								ampm = 'AM';
							}
							hours %= 12; // hours = hours % 12 shorthand
							if (hours === 0) {
								hours = 12;
							}
							var minutes = d.getMinutes();
							return hours + ':' + minutes + ' ' + ampm;
						}
					}
				})(),
				MDY: (function () {
					return {
						Numeral: function () {
							var d = new Date();
							var month = d.getMonth() + 1;
							var day = d.getDate();
							var year = d.getFullYear();
							return month + '/' + day + '/' + year;
						},
						Name: function () {
							var d = new Date();
							var month = monthNames[d.getMonth()]
							var day = d.getDate();
							var year = d.getFullYear();
							return month + ' ' + day + ', ' + '' + year;
						}
					}
				})(),
			}
		})(),
		Second: (function () {
			return {
				Second: function () {
					var d = new Date();
					return String(d.getSeconds());
				},
				DblDigit: function () {
					var d = new Date();
					var second = this.Second();
					return doubleDigit(second);
				}
			}
		})(),
		Minute: (function () {
			return {
				Minute: function () {
					var d = new Date();
					return String(d.getMinutes());
				},
				DblDigit: function () {
					var d = new Date();
					return doubleDigit(this.Minute());
				}
			}
		})(),
		Hour: (function () {
			return {
				TwentyFourHour: function () {
					var d = new Date();
					return String(d.getHours());
				},
				TwelveHour: function () {
					var d = new Date();
					var x = d.getHours()
					// var hours = new Date().getHours().toString();
					// hours %= 12;
					// if (hours === 0) {
					// 	hours = 12;
					// }
					// return hours.toString();
					if (x > 12) {
						return String(x - 12);
					} else {
						return String(d.getHours());
					}
				},
				AMPM: (function () {
					return {
						UpperCase: function () {
							let hours = new Date().getHours();
							if (hours > 11) {
								return 'PM';
							}
							return 'AM';
						},
						LowerCase: function () {
							let hours = new Date().getHours();
							return (hours > 11) ? 'pm' : 'am';
						}
					}
				})()
			}
		})(),
		Week: (function () {
			return {
				DayOfWeek: function () {
					var d = new Date();
					var day = days[d.getDay()];
					return day;
				},
				AbrDayOfWeek: function () {
					var day = this.DayOfWeek();
					return day.substr(0, 3);
				},
				FirstTwoOfWeek: function () {
					var day = this.DayOfWeek();
					return day.substr(0, 2);
				},
				WeekOfYear: function () { }
			}
		})(),
		Month: (function () {
			return {
				DateOfMonth: (function () {
					return {
						Numeral: function () {
							var d = new Date();
							return '' + (d.getDate()); // or .toString();
						},
						Ordinal: function () {
							var d = new Date();
							return getOrdinalValue(d.getDate());
							// 	function nth(d) {
							// 		if (d>3 && d<21) 
							// 		return 'th';
							// 		switch (d % 10) {
							// 			case 1: return 'st';
							// 			case 2: return 'nd';
							// 			case 3: return 'rd';
							// 			default: return 'th';
							// 		}
							// 	}this.bind(this);
							// return (d.getDate()) + 'th';	
						},
						DateDblDigit: function () {
							var date = this.Numeral();////
							return doubleDigit(date);
						}
					}
				})(),
				MonthNumber: function () {
					var d = new Date();
					return (d.getMonth() + 01).toString();
				},
				MonthNumberDblDigit: function () {
					// var d = new Date();
					// return '0' + (d.getMonth() + 1);
					var monthNumber = this.MonthNumber();
					return doubleDigit(monthNumber);
				},
				AbrOfCurrentMonth: function () {
					var d = new Date;
					return abrNames[d.getMonth()];
					// abrNames[new Date().getMonth()];
				},
				CurrentMonth: function () {
					var d = new Date();
					return monthNames[d.getMonth()];
				}
			}
		})(),
		Year: (function () {
			return {
				DayOfYear: (function () {
					return {
						Numeral: function () { },
						Ordinal: function () { }
					}
				})(),
				YearFull: function () {
					return new Date().getFullYear().toString();
				},
				YearAbr: function () {
					var year = this.YearFull();
					return year.substr(-2);
				}
			}
		})(),
		Defaults: function () { }
	}
})();