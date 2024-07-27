var chart = null

if (window.frameElement) {
	let iframeId = window.frameElement.getAttribute('id') ?? ''
	document.addEventListener('UniAppJSBridgeReady', () => {
		window.parent.postMessage({
			action: 'onJSBridgeReady',
			iframeId: iframeId,
		}, '*');
	})
}

function init({
	conf,
	dataSet,
	source,
	geom,
	scale,
	coord,
	axis,
	legend,
	tooltip,
	pieLabel,
	guide,
	registerShape,
	registerAnimation,
	interaction,
	scrollBar,
	gesture,
	landscape,
	map,
	immediately,
	afterRender
}) {
	let data = source.data

	if (!source || !data || !geom) {
		return emit({
			error: 'source error'
		})
	}

	if (!conf) conf = {}

	let defs = {
		id: 'chart',
		pixelRatio: window.devicePixelRatio,
		title: conf.title || null,
		width: conf.width || null,
		height: conf.height || null,
		padding: conf.padding || 'auto',
		appendPadding: conf.appendPadding || 15,
		animate: conf.animate || null,
		syncY: conf.syncY || false,
		aria: conf.aria || false,
	}

	try {

		// 自定义 Shape
		if (registerShape != null) {
			registerShape.forEach(a => {
				F2.Shape.registerShape(a.type, a.name, {
					getPoints: a.getPoints == null ? null : parse(a.getPoints),
					draw: a.draw == null ? null : parse(a.draw)
				})
			})
		}

		// 自定义 Animate
		if (registerAnimation != null) {
			registerAnimation.forEach(a => {
				F2.Animate.registerAnimation(a.name, parse(a.callback))
			})
		}

		// 地图
		if (map) {
			data = new window.DataSet.View().source(MapData, {
				type: 'GeoJSON'
			}).rows
		}

		// DataSet
		if (dataSet) {
			data = parse(dataSet)(data)
		}

		// F2 图表
		chart = new F2.Chart(defs)

		// 数据
		chart.source(data, source.conf ? parse(source.conf) : {})

		// 横屏
		if (landscape) {
			// chart.landscape(true)
		}

		// 度量
		if (scale) {
			scale.forEach(s => {
				chart.scale(s.field, parse(s.conf))
			})
		}

		// 坐标系
		if (coord) {
			chart.coord(coord.polar ? 'polar' : 'rect', parse(coord))
		}

		// 坐标系配置
		if (axis) {
			axis.forEach(a => {
				chart.axis(a ? parse(a) : false)
			})
		} else {
			chart.axis(false)
		}

		// 图例
		chart.legend(legend ? parse(legend) : false)

		// 提示
		chart.tooltip(tooltip ? parse(tooltip) : false)

		// 饼图文本
		if (pieLabel) {
			chart.pieLabel(parse(pieLabel))
		}

		// 辅助元素
		if (guide) {
			let _guide = chart.guide()

			if (guide.line) {
				guide.line.forEach(a => {
					_guide.line(parse(a))
				})
			}

			if (guide.text) {
				guide.text.forEach(a => {
					_guide.text(parse(a))
				})
			}

			if (guide.point) {
				guide.point.forEach(a => {
					_guide.point(parse(a))
				})
			}

			if (guide.tag) {
				guide.tag.forEach(a => {
					_guide.tag(parse(a))
				})
			}

			if (guide.rect) {
				guide.rect.forEach(a => {
					_guide.rect(parse(a))
				})
			}

			if (guide.html) {
				guide.html.forEach(a => {
					_guide.html(parse(a))
				})
			}

			if (guide.arc) {
				guide.arc.forEach(a => {
					_guide.arc(parse(a))
				})
			}

			if (guide.regionFilter) {
				guide.regionFilter.forEach(a => {
					_guide.regionFilter(parse(a))
				})
			}
		}

		// 几何标记对象
		function geometry(g, {
			position,
			color,
			shape,
			size,
			adjust,
			style,
			animate
		}) {

			// 数据值映射图形上的位置
			g.position(position)

			// 将数据值映射到图形上的颜色
			if (color) {
				if (color.callback) {
					g.color(color.field, parse(color.callback))
				} else if (color.colors) {
					g.color(color.field, color.colors)
				} else if (color.field) {
					g.color(color.field)
				} else if (color.color) {
					g.color(color.color)
				}
			}

			// 将数据值映射到图形上的形状
			if (shape) {
				if (shape.callback) {
					g.shape(shape.field, parse(shape.callback))
				} else if (shape.shapes) {
					g.shape(shape.field, shape.shapes)
				} else if (shape.field) {
					g.shape(shape.field)
				} else if (shape.shape) {
					g.shape(shape.shape)
				}
			}

			// 将数据值映射到图形上的大小
			if (size) {
				if (size.callback) {
					g.size(size.field, parse(size.callback))
				} else if (size.range) {
					g.size(size.field, size.range)
				} else if (size.field) {
					g.size(size.field)
				} else if (size.size) {
					g.size(size.size)
				}
			}

			// 数据调整方式
			if (adjust) {
				g.adjust(adjust)
			}

			// 配置几何标记显示的图形属性
			if (style) {
				if (style.callback) {
					g.style(style.field, parse(style.callback))
				} else if (style.field) {
					if (style.style) {
						g.style(style.field, parse(style.style))
					} else {
						g.style(style.field)
					}
				} else if (style.style) {
					g.style(parse(style.style))
				}
			}

			// 动画
			g.animate(animate ? parse(animate) : false)
		}

		if (geom.point) {
			geom.point.forEach(a => {
				geometry(chart.point(a), a)
			})
		}

		if (geom.path) {
			geom.path.forEach(a => {
				geometry(chart.path(a), a)
			})
		}

		if (geom.line) {
			geom.line.forEach(a => {
				geometry(chart.line(a), a)
			})
		}

		if (geom.area) {
			geom.area.forEach(a => {
				geometry(chart.area(a), a)
			})
		}

		if (geom.interval) {
			geom.interval.forEach(a => {
				geometry(chart.interval(a), a)
			})
		}

		if (geom.polygon) {
			geom.polygon.forEach(a => {
				geometry(chart.polygon(a), a)
			})
		}

		if (geom.schema) {
			geom.schema.forEach(a => {
				geometry(chart.schema(a), a)
			})
		}

		// 交互
		if (interaction) {
			if (interaction.pie) {
				chart.interaction('pie-select', parse(interaction.pie))
			}

			if (interaction.interval) {
				chart.interaction('interval-select', parse(interaction.interval))
			}

			if (interaction.pan) {
				chart.interaction('pan', parse(interaction.pan))
			}

			if (interaction.pinch) {
				chart.interaction('pinch', parse(interaction.pinch))
			}

			if (interaction.swipe) {
				chart.interaction('swipe', parse(interaction.swipe))
			}
		}

		// scrollBar
		if (scrollBar) {
			chart.scrollBar(scrollBar)
		}

		// 手势事件
		if (gesture) {
			chart.pluginGesture(parse(gesture))
		}

		// 渲染
		if (immediately == undefined || immediately == true) {
			chart.render()
		}

		// 渲染后执行函数
		if (afterRender) {
			parse(afterRender)()
		}
	} catch (e) {
		console.log(e);

		emit({
			error: e.toString()
		})
	}
}

function change(data) {
	chart && chart.changeData(data)
}

function clear() {
	chart && chart.clear()
}

function emit(data) {
	uni.postMessage({
		data: data
	});
}

function parse(obj) {
	return JSON.parse(JSON.stringify(obj), function(key, value) {
		if (typeof value == 'string' && value.startsWith('function')) {
			return eval('(' + value + ')')
		}

		return value
	})
}